import "./style.css";
import { Map, View } from "ol";
import Projection from "ol/proj/Projection.js";
import ScaleLine from "ol/control/ScaleLine.js";
import TileLayer from "ol/layer/Tile";
import { get } from "ol/proj";
import Zoom from "ol/control/Zoom.js";
import XYZ from "ol/source/XYZ.js";
import { getArea, getCenter, getSize, getTopLeft } from "ol/extent";
import * as olCoordinate from "ol/coordinate";
import { format } from "ol/coordinate.js";
import { createStringXY } from "ol/coordinate.js";

const layers = new TileLayer({
  source: new XYZ({
    url: "./escenarios/{z}/{x}/{y}.png",
    wrapX: false,
  }),
});
let miprojection = get("EPSG:3857");

let miview = new View({
  center: [100, 100],
  zoom: -1,
  maxZoom: 2,
  minZoom: 0,
  projection: miprojection,
  /*extent: [
      -20037508.342789244, -14296914.994038079, 20019591.13990132,
      11415704.644094523,
    ],*/
  extent: [
    -20037508.342789244, -20037508.342789244, 20037508.342789244,
    20037508.342789244,
  ],
});
const map = new Map({
  /*controls: [
    new Zoom(),
     new ScaleLine({
      minWidth: 200,
      maxWidth: 300,
      units: "metric",
      bar: true,
      steps: 4,
      text: true,
    }),
  ],*/
  target: "map",
  layers: [layers],
  view: miview,
});
map.on("click", () => {});
map.on("click", (event) => {
  let coordinate = event.coordinate;
  console.log("el zoom es", miview.getZoom());
  console.log("el centro es", coordinate);
});
