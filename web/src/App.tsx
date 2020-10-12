import React from 'react';
import './styles/pages/landing.css';

function App() {

  const words = languages.pt;

  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <h1>{words.title}</h1>
      </div>
    </div>
  );
}

export default App;

const languages = {
  pt: {
    title: "Leve felicidade para o mundo",
    subtitle: "Visite orfanatos e mude o dia de muitas crianças",
    logoAlt: "Logo Happy",
  }
}
