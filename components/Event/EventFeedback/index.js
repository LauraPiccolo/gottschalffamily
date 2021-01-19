import $ from 'jquery'
import {useEffect} from 'react'

const EventFeedback = ({ medias }) => {

  useEffect(() => {
    if(document.querySelectorAll('.event__feedback__scroll').length > 0) {
      document.body.addEventListener("mousewheel", horizontalScroll, false);
      document.body.addEventListener("DOMMouseScroll", horizontalScroll, false); 
      setTimeout(() => {
        let totalWidth = 0
        medias.forEach((media, index) => {
          const elementWidth = document.querySelectorAll('.event__feedback__media')[index].clientWidth
          totalWidth += elementWidth;
        });
        document.querySelector('.event__feedback__scroll').style.width = `${totalWidth}px`
      }, 500);
    }
  }, [medias])

  const horizontalScroll = (event) => {
    if(document.querySelectorAll('.event__feedback').length > 0) {
      document.querySelector('.event__feedback').scrollLeft += event.deltaY
    }
  }

  return (
    <div className="event__feedback">
      <div className="event__feedback__scroll">
        {
        medias.map((media) => {
          if(media.filename.indexOf('jpg') > 0 || media.filename.indexOf('jpeg') > 0 || media.filename.indexOf('png') > 0) {
            return (<img className="event__feedback__media event__feedback__media--image" src={media.filename} />)
          }
          if(media.filename.indexOf('mpeg') > 0 || media.filename.indexOf('mp4') > 0 || media.filename.indexOf('m4v') > 0) {
            return (<video className="event__feedback__media event__feedback__media--video" controls><source src={media.filename} /></video>)
          }
        })}
        </div>
        <div className="event__feedback__mobile">
        {
        medias.map((media) => {
          if(media.filename.indexOf('jpg') > 0 || media.filename.indexOf('jpeg') > 0 || media.filename.indexOf('png') > 0) {
            return (<img className="event__feedback__media event__feedback__media--image" src={media.filename} />)
          }
          if(media.filename.indexOf('mpeg') > 0 || media.filename.indexOf('mp4') > 0 || media.filename.indexOf('m4v') > 0) {
            return (<video className="event__feedback__media event__feedback__media--video" controls><source src={media.filename} /></video>)
          }
        })}
        </div>
    </div>
  );
};

export default EventFeedback;
