// * React / modules
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// * Components
import HappyButton from '../components/HappyButton';

// * Utils / Images
import LogoFaceImg from '../images/logo-face.svg';
import happyMapIcon from '../utils/mapIcon';

// * CSS
import '../styles/pages/OrphanateMap.css';

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
          <Marker icon={happyMapIcon} position={[-22.9955881, -49.8649668]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
              Qualquer coisa
              <HappyButton type='forward' to='/orphanages/1' />
            </Popup>
          </Marker>
          <Marker icon={happyMapIcon} position={[-22.993533, -49.860741]} />
        </Map>

        <HappyButton type="plus" iconSize={32} to='/orphanage/create' />
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
