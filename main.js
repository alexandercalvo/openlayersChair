import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ.js";

const layers = new TileLayer({
  source: new XYZ({
    url: "./escenarios/{z}/{x}/{y}.png",
  }),
});
const map = new Map({
  target: "map",
  layers: [layers],
  view: new View({
    center: [0, 0],
    zoom: 0,
    maxZoom: 2,
  }),
});
