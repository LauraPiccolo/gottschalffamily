
import React, { useEffect, useState } from 'react';

// == Import
// import './style.css';


// == Composant
const Player = ({ audioFile }) => {

  useEffect(() => {
    document.querySelector('.player__audio').load();
  },[audioFile])

  return (
    <div className="player">
      <span className="player__cursor"/>
      <audio className="player__audio">
        <source src={`/audios/${audioFile}`} />
      </audio>
    </div>
  );
};

// == Export
export default Player;
