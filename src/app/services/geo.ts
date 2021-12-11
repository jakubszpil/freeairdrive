import {geoJSON, latLngBounds, layerGroup} from "leaflet";
import osmtogeojson from "osmtogeojson";
var _ = require('lodash');

function buildOverpassApiUrl(map: any, overpassQuery: any) {
    var bounds =
        map.getBounds().getSouth() +
        "," +
        map.getBounds().getWest() +
        "," +
        map.getBounds().getNorth() +
        "," +
        map.getBounds().getEast();
    var nodeQuery = "node[" + overpassQuery + "](" + bounds + ");";
    var wayQuery = "way[" + overpassQuery + "](" + bounds + ");";
    var relationQuery = "relation[" + overpassQuery + "](" + bounds + ");";
    var query =
        "?data=[out:json][timeout:15];(" +
        nodeQuery +
        wayQuery +
        relationQuery +
        ");out body geom;";
    var baseUrl = "http://overpass-api.de/api/interpreter";
    var resultUrl = baseUrl + query;
    return resultUrl;
}

function measureDistance(lat1: any, lon1: any, lat2: any, lon2: any, unit: any) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") {
            dist = dist * 1.609344
        }
        if (unit === "N") {
            dist = dist * 0.8684
        }
        return dist;
    }
}

export const getPoints = async (map: any, value: any) => {
    var overpassApiUrl = `https://lz4.overpass-api.de/api/interpreter?data=[out:json][timeout:5];(way(${value})[amenity=parking];);out%20center%20body;%3E;out%20skel%20qt;`;

    return fetch(overpassApiUrl)
        .then(res => {
            return res.json();
        })
        .then(data => {
            var geoJsonData = osmtogeojson(data);
            const arrOfPolygons = geoJsonData.features.map(r => r.geometry);
            const newArr = geoJsonData.features.filter(r => r.geometry.type === 'Point');
            const arrayOfDistances: { id: string | number | undefined; distance: number; }[] = [];
            //@ts-ignore
            newArr.map(r => arrayOfDistances.push({id: r.id, distance: measureDistance(50.2606725, 19.0224603, r?.geometry?.coordinates[1], r?.geometry?.coordinates[0], 'K'), latitude: r?.geometry?.coordinates[1], longtitude: r?.geometry?.coordinates[0]}))
            arrayOfDistances.sort((a, b) => {
                return a.distance - b.distance;
            });
            const shortestPath = arrayOfDistances[0];
            return {
                shortestPath,
                arrOfPolygons
            };
        });
}

export const getPolygons = async (map: any, value: any) => {
    var overpassApiUrl = `https://lz4.overpass-api.de/api/interpreter?data=[out:json][timeout:5];(way(${value})[amenity=parking];way(${value})[highway~%22(residential%7Cprimary%7Csecondary%7Cunclassified%7Cservice)%22];);out%20body;%3E;out%20skel%20qt;`;
    // console.log(overpassApiUrl);

    return fetch(overpassApiUrl)
        .then((res) => {
            return res.json();
        })
        .then((osmDataAsJson) => {
            console.log(osmDataAsJson);
            var resultAsGeojson = osmtogeojson(osmDataAsJson);
            const polyLayerGroup = layerGroup();
            //@ts-ignore
            geoJSON(resultAsGeojson, {
                style: function (feature: any) {
                    return {
                        color:
                            feature.feature?.properties?.access === "yes"
                                ? "#32689c"
                                : "#c43f3f",
                    };
                },
                filter: function (feature: any) {
                    var isPolygon =
                        feature.geometry &&
                        feature.geometry.type !== undefined &&
                        feature.geometry.type === "Point";
                    if (isPolygon) {
                        feature.geometry.type = "Point";
                        var polygonCenter = latLngBounds(
                            feature.geometry.coordinates[0]
                        ).getCenter();
                        feature.geometry.coordinates = [
                            polygonCenter.lat,
                            polygonCenter.lng,
                        ];
                    }
                    return true;
                },
                onEachFeature: function (feature: any, layer: any) {
                    var popupContent = "";

                    var keys = Object.keys(feature.properties ?? {});
                    keys.forEach(function (key) {
                        popupContent =
                            popupContent +
                            "<dt>" +
                            key +
                            "</dt><dd>" +
                            feature.properties[key] +
                            "</dd>";
                    });
                    popupContent = popupContent + "</dl>";
                    layer.bindPopup(popupContent);
                },
            }).addTo(polyLayerGroup);

            return polyLayerGroup;
        });
};
