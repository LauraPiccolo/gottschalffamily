
import React, { useEffect, useState } from 'react';

// == Import
// import './style.css';


// == Composant
const Languages = ({ setLang, currentLang }) => {

  const languages = ['de','en','ar'];

  const changeLanguage = (event, lang) => {
    document.querySelector('.player__cursor').style.animation = 'unset';
    event.preventDefault(); 
    setLang(lang);
  }

  return (
    <nav className="languages">
      <ul>
        {
          languages.map((lang) => (
            <li 
            onClick={(event) => changeLanguage(event, lang)} 
            className={`${lang === currentLang ? 'languages__active':''}`}>
              {lang}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

// == Export
export default Languages;
