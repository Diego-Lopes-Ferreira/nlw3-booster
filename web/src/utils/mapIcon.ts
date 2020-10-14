import L from 'leaflet';

import mapMarkerImg from '../images/logo-face.svg';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2],
});

export default happyMapIcon;
