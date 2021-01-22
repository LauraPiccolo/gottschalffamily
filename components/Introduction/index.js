import Link from 'next/link'
import $ from 'jquery';
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';

const Introduction = ({ content }) => {

  const showArrow = (event) => {
    document.querySelector('.arrow-cursor').style.display = 'block';
    arrowCursor(event)
  }

  const arrowCursor = (e) => {
    $('.arrow-cursor').offset({
      left: e.pageX - 50,
      top: e.pageY - 20
    });
  }

  useEffect(() => {
    Marquee3k.init();
  })

  const unmuteVideo = () => {
    document.querySelector('.introduction__video').muted = false;
  }

  return (
    <div>
      <section className="introduction">
        <video className="introduction__video" autoPlay loop muted>
          <source src={content.Introduction_video.filename} />
        </video>

        <h1 className="introduction__title introduction__title--mobile">{content.Title}</h1>
        <h1 className="introduction__title introduction__title--desktop">{content.Title}</h1>
        <p className="introduction__subtitle introduction__subtitle--mobile">{content.Subtitle}</p>
        <p className="introduction__subtitle introduction__subtitle--desktop">{content.Subtitle}</p>

        <Link href={`/archive${content.Storylink.url}`} onClick={(event) => showArrow(event)}>
          <a className="introduction__link introduction__link--story">Go to story</a></Link>
        <Link href="/home/was" onClick={(event) => showArrow(event)}><a className="introduction__link introduction__link--about">About Storyfeld</a></Link>
        <button className="introduction__unmute" onClick={unmuteVideo}>
          <div className="marquee3k" 
          data-speed="0.5">
            <p>Click here to hear the sound from the video</p>
          </div>
        </button>
      </section>
    </div>
  );
};

export default Introduction;
