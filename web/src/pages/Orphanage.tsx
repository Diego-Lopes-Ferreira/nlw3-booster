// * React / modules
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker } from "react-leaflet";
import { useParams } from 'react-router-dom';

// * Components
import Sidebar from "../components/Sidebar";
import TileLayerConfigured from '../components/TileLayerConfigured';

// * Utils / images
import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

// * CSS
import '../styles/pages/orphanage.css';


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  description: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    url: string;
    id: number;
  }>;
}

interface RouteParams {
  id: string;
}

export default function Orphanage() {
  const { id } = useParams<RouteParams>();

  const [orphanage, setOrphanage] = useState<Orphanage>();



  useEffect(() => {
    async function findOrphanages() {
      let response = await api.get(`orphanages/${id}`);
      const orphanage = response.data;
      setOrphanage(orphanage);
    }
    findOrphanages();
  }, [id]);

  if (!orphanage) {
    return (
      <h1>loading</h1>
    )
  }

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[0].url} alt={orphanage.name} />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.description}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayerConfigured />
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a href="/">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}