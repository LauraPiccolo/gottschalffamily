import $ from 'jquery';

const FullScreenVideo = ({ lang }) => {

  const stopVideo = () => {
    document.querySelector('.player__cursor').style.opacity = '0';
    document.querySelector('.player').style.width = '100%';
    document.querySelector('.player').style.marginLeft = '0';
    document.querySelector('.video').style.opacity = '0';
    setTimeout(() => {document.querySelector('.video').style.zIndex = '0';}, 700);
    document.querySelector('.video__video').pause();
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.player').style.opacity = '0';
    document.querySelector('.player__cursor').style.animationPlayState = 'paused';
    document.querySelector('.player__audio').pause();
    document.querySelector('.video').style.pointerEvents = 'all';
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
    <div className="video" 
    onClick={stopVideo} 
    loop
    onMouseMove={(event) => crossCursor(event)}
    onMouseEnter={(event) => showCross(event)}
    onMouseLeave={hideCross}
    >
      <video className={`video__video video__video--${lang}`} loop>
      <source src="/audios/background.mp4"/>
    </video>
    </div>
  );
};

export default FullScreenVideo;
