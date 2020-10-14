// * React / modules
import React, { useEffect, useState } from 'react';
import { Map, Marker, Popup } from 'react-leaflet';

// * Components
import HappyButton from '../components/HappyButton';

// * Utils / Images / Services
import LogoFaceImg from '../images/logo-face.svg';
import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

// * CSS
import '../styles/pages/OrphanateMap.css';
import TileLayerConfigured from '../components/TileLayerConfigured';


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanateMap() {

  const [orphanagesList, setOrphanagesList] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function findOrphanages() {
      let response = await api.get('orphanages');
      const orphanages = response.data;
      setOrphanagesList(orphanages);
    }
    findOrphanages();
  }, [])

  useEffect(() => {
    console.log('oi')
  }, [])

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
        <HappyButton type='back' />
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
          {

          }
          <TileLayerConfigured />
          {
            orphanagesList.map(orphanage => {
              return (
                <Marker
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                  key={orphanage.id}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                    {orphanage.name}
                    <HappyButton type='forward' to={`/orphanages/${orphanage.id}`} />
                  </Popup>
                </Marker>
              );
            })
          }
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
