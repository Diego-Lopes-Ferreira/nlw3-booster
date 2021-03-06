// * React / modules
import React from 'react';

// * Components
import HappyButton from '../components/HappyButton';

// * Utils / images
import colors from '../utils/colors';
import logoImg from '../images/logo.svg';

// * CSS
import '../styles/pages/landing.css';

function Landing() {

  const words = languages.pt;
  const local = {
    city: "Ourinhos",
    state: "São Paulo"
  }

  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt={words.logoAlt} />
        <main>
          <h1>{words.title}</h1>
          <p>{words.subtitle}</p>
        </main>

        <div className="location">
          <strong>{local.city}</strong>
          <span>{local.state}</span>
        </div>

        <div className="enter-app">
          <HappyButton type='forward' to='/map' iconColor={colors.colorIconDarkOpacity} />
        </div>

      </div>
    </div>
  );
}

export default Landing;

const languages = {
  pt: {
    title: "Leve felicidade para o mundo",
    subtitle: "Visite orfanatos e mude o dia de muitas crianças",
    logoAlt: "Logo Happy",
  }
}
