// * React / modules
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Map, Marker } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from "react-router-dom";


// * Components
import Sidebar from "../components/Sidebar";
import TileLayerConfigured from "../components/TileLayerConfigured";

// * Utils / images
import happyMapIcon from '../utils/mapIcon';
import api from "../services/api";

// * CSS
import '../styles/pages/create-orphanage.css';

interface FilePreview {
  path: string;
  name: string;
}

export default function CreateOrphanage() {

  const { goBack } = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  // * Inputs
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setopeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<FilePreview[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(position.latitude));
    data.append('longitude', String(position.longitude));
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    // data.append('images', images);
    images.forEach(image => {
      data.append('images', image);
    });


    await api.post('orphanages', data);

    alert('Cadastrado com sucesso');

    goBack();
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      setImages(selectedImages);

      const selectedImagesPreview = selectedImages.map(image => {
        return {
          path: URL.createObjectURL(image),
          name: image.name,
        }
      })
      setPreviewImages(selectedImagesPreview);
    }
  }

  function handleUnSelectImage(userImage: FilePreview) {
    let selectedImagesPreview = previewImages.filter(image => {
      return image.name !== userImage.name;
    })
    let selectedImages = images.filter(image => {
      return image.name !== userImage.name;
    })
    setPreviewImages(selectedImagesPreview);
    setImages(selectedImages);
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>


            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayerConfigured />
              {
                position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={happyMapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )
              }
            </Map>


            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>


            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </div>


            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {
                  previewImages.map(image => {
                    return (
                      <div key={image.name} className="image-wrapper">
                        <img src={image.path} alt="selected" />
                        <button onClick={() => handleUnSelectImage(image)}>X</button>
                      </div>
                    )
                  })
                }
                <label htmlFor='image' className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

            </div>

            <input
              type='file'
              multiple
              id='image'
              style={{ display: 'none' }}
              onChange={handleSelectImages}
            />

          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setopeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={open_on_weekends ? "" : "active"}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>

          <button
            className="confirm-button"
            type="button"
            onClick={() => {
              console.log(images)
              console.log(previewImages)
            }}
          >
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
