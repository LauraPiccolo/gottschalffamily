const PlayButton = ({ }) => {

  const playAudio = (event) => {
    event.preventDefault();
    document.querySelector('.player').style.width = 'calc(100% - 40px)';
    document.querySelector('.player').style.marginLeft = '20px';
    document.querySelector('.video').style.opacity = '1';
    document.querySelector('.video').style.zIndex = '5';
    document.querySelector('.video').style.pointerEvents = 'all';
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

  return (
    <div className="play-button" onClick={(event) => {playAudio(event)}}>AUDIO / VIDEO</div>
  );
};

export default PlayButton;
