import React, { useState } from 'react';

import Header from './Header';
import Languages from './Languages';
import Sticker from './Sticker';
// FETCH
import content from '../data';
import $ from 'jquery'

const Layout = ({ children, settings }) => {

    const [lang, setLang] = useState('de');
    const closePicture = (event) => {
      event.target.style.display = 'none'
      hideCross();
    }
  
    const crossCursor = (e) => {
      $('.cross-cursor').offset({
        left: e.pageX - 40,
        top: e.pageY - 40
      });
    }
  
    const showCross = (event) => {
      document.querySelector('.cross-cursor').style.display = 'block';
      crossCursor(event);
    }
  
    const hideCross = () => {
      document.querySelector('.cross-cursor').style.display = 'none';
    }
  

    return (
        <div className="container">
            <img className="arrow-cursor" src="/black-arrow.png" alt="cursor" />
            <img className="cross-cursor" src="/cross.png" alt="cursor" />
            <img className="cities--big" 
            src="/city.png" 
            alt="wo" 
            onClick={(event) => closePicture(event)}
            onMouseMove={(event) => crossCursor(event)}
            onMouseEnter={(event) => showCross(event)}
            onMouseLeave={hideCross}
            />

            <Header />
            <Languages setLang={setLang} currentLang={lang}/>
            <Sticker content={content[lang].sticker} />
            {children}
        </div>
    )
}
  
export default Layout
