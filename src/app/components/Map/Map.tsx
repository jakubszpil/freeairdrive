import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";

import "./Map.css";
import { getPoints, getPolygons } from "app/services/geo";
import MapSearch from "./MapSearch";
import { calculateDistance } from "app/services/distance";
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
// @ts-ignore
L.Icon.Default.mergeOptions({
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
});

function Polygons({
  position,
  radius,
  setIsSuccessfulFoundRoute,
}: {
  position: {
    latitude: number;
    longitude: number;
  } | null;
  radius: number;
  setIsSuccessfulFoundRoute: (v: boolean) => void;
}) {
  const [group, setGroup] = useState<any>(null);
  const [control, setControl] = useState<any>(null);
  const map = useMap();

  useEffect(() => {
    if (position) {
      const { latitude, longitude } = position;

      getPoints(
        map,
        `around:${radius},${position?.latitude},${position?.longitude}`,
        latitude,
        longitude
      ).then((r) => {
        console.log(r);
        if (control) {
          map.removeControl(control);
          setControl(null);
        }
        if (r.shortestPath) {
          calculateDistance(
            [latitude, longitude],
            [r.shortestPath.latitude, r.shortestPath.longitude]
          ).then((distanceControl) => {
            distanceControl.addTo(map);
            setGroup(distanceControl);
            setIsSuccessfulFoundRoute(true);
          });
        }
      });
      getPolygons(
        map,
        `around:${radius},${position.latitude},${position.longitude}`
      ).then((polyGroup) => {
        if (group && "removeFrom" in group) {
          group?.removeFrom(map);
          setGroup(null);
        }
        polyGroup.addTo(map);
        setGroup(polyGroup);
      });
    }
  }, [map, position, radius]);

  return null;
}

function Map({
  setIsSuccessfulFoundRoute,
}: {
  setIsSuccessfulFoundRoute: (v: boolean) => void;
}) {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    // const watchPositionNumber = navigator.geolocation.watchPosition(
    //   (position) => {
    //     setPosition({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     });
    //   }
    // );

    // return () => {
    //   navigator.geolocation.clearWatch(watchPositionNumber);
    // };
  }, [setPosition]);

  if (!position) {
    return null;
  }

  return (
    <div className="map">
      <MapContainer
        center={[position.latitude, position.longitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          className="map-tiles"
          attribution={
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position.latitude, position.longitude]}>
          <Popup>
            <h3>You are here!</h3>
          </Popup>
        </Marker>
        <Polygons
          position={position}
          radius={radius}
          setIsSuccessfulFoundRoute={setIsSuccessfulFoundRoute}
        />
        <MapSearch setRadius={setRadius} radius={radius} />
      </MapContainer>
    </div>
  );
}

export default Map;
