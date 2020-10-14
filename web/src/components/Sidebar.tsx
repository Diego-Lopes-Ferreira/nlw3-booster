import React from 'react';
import HappyButton from './HappyButton';

import mapMarkerImg from '../images/logo-face.svg';
import '../styles/components/Sidebar.css';

function Sidebar() {
  return (
    <aside className='app-sidebar'>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <HappyButton type='back' />
      </footer>
    </aside>
  );
}

export default Sidebar;