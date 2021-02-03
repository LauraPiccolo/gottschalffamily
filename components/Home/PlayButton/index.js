const PlayButton = ({ lang }) => {

  const playAudio = (event) => {
    event.preventDefault();
    document.querySelector('.player').style.width = 'calc(100% - 40px)';
    document.querySelector('.player').style.marginLeft = '20px';
    document.querySelector('.video').style.opacity = '1';
    document.querySelector('.video').style.zIndex = '10';
    document.querySelector('.video').style.pointerEvents = 'all';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.player').style.opacity = '1';
    document.querySelector('.cross-cursor').style.display = 'block';
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

  const audioText = {
    en: 'AUDIO / VIDEO',
    de: 'AUDIO / VIDEO',
    ar: 'صوت / فيديو'
  }

  return (
    <div className="play-button" onClick={(event) => {playAudio(event)}}>{audioText[lang]}</div>
  );
};

export default PlayButton;
