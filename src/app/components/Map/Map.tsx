import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import { icon } from "leaflet";

import "./Map.css";
import { getPolygons } from "app/services/geo";
import MapSearch from "./MapSearch";
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
// @ts-ignore
L.Icon.Default.mergeOptions({
  iconUrl: MarkerIcon,
  // shadowUrl: MarkerShadow,
});

const iconPin = icon({
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
  // iconSize: [24, 54],
  // shadowSize: [34, 54],
});

function Polygons({ position, radius }: any) {
  const [group, setGroup] = useState<any>(null);
  const map = useMap();
  useEffect(() => {
    if (position?.latitude && position?.longitude) {
      getPolygons(map, `around:${radius},50.2606725,19.0224603`).then(
        (polyGroup) => {
          if (group) {
            group.removeFrom(map);
            setGroup(null);
          }
          polyGroup.addTo(map);
          setGroup(polyGroup);
        }
      );
    }
  }, [map, position, radius]);

  return null;
}

function Map() {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [radius, setRadius] = useState(200);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [setPosition]);

  if (!position) {
    return null;
  }

  return (
    <div className="map">
      <MapContainer
        center={[50.2606725, 19.0224603]}
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
        <Marker position={[50.2606725, 19.0224603]} icon={iconPin}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polygons position={position} radius={radius} />
        <MapSearch setRadius={setRadius} radius={radius} />
      </MapContainer>
    </div>
  );
}

export default Map;
