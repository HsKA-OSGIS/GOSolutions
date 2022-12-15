//replaced the map display in main.js with the new OGC API 
//imports for Map layer
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import OGCMapTile from 'ol/source/OGCMapTile';
import TileLayer from 'ol/layer/Tile';
//imports for Vector Layers
import MVT from 'ol/format/MVT';
import OGCVectorTile from 'ol/source/OGCVectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View';

const map = new Map({
  target: 'map',

  //creating the Layers
  layers: [
    new TileLayer({
      source: //new OGCMapTile({
        new OSM()
    }),
    new VectorTileLayer({
      source: new OGCVectorTile({
        url: 'https://maps.ecere.com/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WebMercatorQuad',
        format: new MVT(),
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});
