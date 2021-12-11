import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import L from "leaflet";

export const calculateDistance = async (
  waipointA: [number, number],
  waipointB: [number, number]
) => {
  return L.Routing.control({
    router: L.Routing.mapbox(
      "pk.eyJ1IjoiemF2aW9lciIsImEiOiJja3gxZjBxZjIxaGQ1Mm9wOGN4NzcxNXNhIn0.Qi2JSpPL9x1DGQdkDvw4Qw",
      {
        routingOptions: {},
        useHints: false,
      }
    ),
    waypoints: [L.latLng(...waipointA), L.latLng(...waipointB)],
    showAlternatives: false,
  });
};
