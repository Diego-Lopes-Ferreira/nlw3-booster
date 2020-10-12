import React from 'react';

import LogoFaceImg from '../images/logo-face.svg';
import '../styles/pages/OrphanateMap.css';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import HappyButton from '../components/HappyButton';

function OrphanateMap() {

  const words = languages.pt;
  const local = {
    city: "Ourinhos",
    state: "São Paulo"
  }

  return (
    <div id="page-map">
      <aside>
        <section>
          <img src={LogoFaceImg} alt={words.logoAlt} />
          <h1>{words.title}</h1>
          <p>{words.subtitle}</p>
        </section>

        <footer className="location">
          <strong>{local.city},</strong>
          <span>{local.state}</span>
        </footer>
      </aside>


      <main className="map">
        <Map
          center={[-22.9955881, -49.8649668]}
          zoom={15}
          style={{
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_KEY}`} />
        </Map>

        <HappyButton type="plus" iconSize={32} />
      </main>

    </div>
  );
}

export default OrphanateMap;

const languages = {
  pt: {
    title: "Escolha um orfanato no mapa",
    subtitle: "Muitas crianças estão esperando a sua visita :)",
    logoAlt: "Logo Happy",
  }
}
