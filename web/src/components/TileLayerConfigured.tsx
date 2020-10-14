import React from "react";
import { TileLayer } from "react-leaflet";

/*
* Using the open street map tileing service:
- <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

* Using the mapbox tileing service:
- <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_KEY}`} />
*/
function TileLayerConfigured() {
  return <TileLayer
    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_KEY}`}
  />
}

export default TileLayerConfigured;
