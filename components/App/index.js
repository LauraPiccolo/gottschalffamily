
import React, { useState } from 'react';
import content from '../../data';

// == Import
import Header from '../Header';
import FullScreenVideo from '../FullScreenVideo';
import Languages from '../Languages';
import PlayButton from '../PlayButton';
import Player from '../Player';
import Wrapper from '../Container';
import Sticker from '../Sticker';
import $ from 'jquery'

const App = ({ }) => {

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
    <div className="home">

      <img className="arrow-cursor" src="/black-arrow.png" alt="cursor" />
      <img className="cross-cursor" src="cross.png" alt="cursor" />
      <img className="cities--big" 
      src="/city.png" 
      alt="wo" 
      onClick={(event) => closePicture(event)}
      onMouseMove={(event) => crossCursor(event)}
      onMouseEnter={(event) => showCross(event)}
      onMouseLeave={hideCross}
      />

      <Header navList={content[lang].navList}/>
      <Languages setLang={setLang} currentLang={lang}/>
      <PlayButton />
      <FullScreenVideo lang={lang} />
      <Sticker content={content[lang].sticker} />
      <Player audioFile={content[lang].audioFile}/>

      <Wrapper lang={lang} content={content}/>
    </div>
  );
};

export default App;
