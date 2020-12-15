
import React, { useEffect, useState } from 'react';
import $ from 'jquery';

// == Import
// import './style.css';


// == Composant
const PlayButton = ({ }) => {

  const playAudio = (event) => {
    event.preventDefault();
    document.querySelector('.player').style.width = 'calc(100% - 40px)';
    document.querySelector('.player').style.marginLeft = '20px';
    document.querySelector('.video').style.opacity = '1';
    document.querySelector('.video').style.zIndex = '5';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.player').style.opacity = '1';
    const duration = document.querySelector('.player__audio').duration;
    document.querySelector('.player__cursor').style.opacity = '1';
    document.querySelector('.arrow-cursor').style.display = 'none';
    setTimeout(() => {
      document.querySelector('.video__video').play();
      if(document.querySelector('.player__cursor').style.animationName !== 'play') {
        document.querySelector('.player__cursor').style.animation = `play ${duration}s linear`;
      }
      else document.querySelector('.player__cursor').style.animationPlayState = 'running';
      document.querySelector('.player__audio').play();
    }, 700)
  }

  // const spinArrow = (event) => {
  //   document.querySelector('.arrow-cursor').style.display = 'block';
  //   // document.querySelector('.play-button__text').style.opacity = "1";
  //   arrowCursor(event)
  // }

  // const arrowCursor = (e) => {
  //   $('.arrow-cursor').offset({
  //     left: e.pageX - 50,
  //     top: e.pageY - 20
  //   });
  // }

  return (
    <div className="play" onClick={(event) => {playAudio(event)}}>
      <button className="play-button"/>
      <button className="play-button play-button--black"/>
      <span className="play-button__text">audio<br/>video</span>
    </div>
  );
};

// == Export
export default PlayButton;
