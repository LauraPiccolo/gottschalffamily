import Link from 'next/link'
import { useEffect, useState } from 'react'

const ArchiveList = ({ eventList, lang }) => {

  const soon = {
    de: 'Bald',
    en: 'Soon',
    ar: 'هكذا'
  }

  useEffect(() => {
    adjustMobile();
    window.addEventListener("resize", adjustMobile);
  }, []);

  const adjustMobile = () => {
    if(window.innerWidth <= 750) {
      const heightLoc = document.querySelector('.archive__locations').clientHeight + 80;
      document.querySelector('.archive__list').style.height = `calc(100vh - ${heightLoc}px)`;
    }
  }

  console.log(eventList[0].length);

  return (
    <div className="archive__list">
      {
      eventList[0].length > 0 && eventList.map((event) => {
        var today = new Date();
        var eventdate = new Date(event[0].date.substring(6, 10) , event[0].date.substring(3, 5) - 1, event[0].date.substring(0, 2));
        if(today > eventdate && event[0].filled) {
          return(
            <a className="archive__list__event" href={`/stories/${event[0].link}`}>
                <img src={event[0].thumbnail} />
                <p>
                  {event[0].theme}<br/>{event[0].date}
                </p>
              </a>
            )
        }        
      })}
      {
      eventList[0].length > 0 && eventList.map((event) => {
        var today = new Date();
        var eventdate = new Date(event[0].date.substring(6, 10) , event[0].date.substring(3, 5) - 1, event[0].date.substring(0, 2));
        if(today > eventdate && !event[0].filled) {
          return(
            <div className="archive__list__event archive__list__event--unfilled" href={`/stories/${event[0].link}`}>
                <img src={event[0].thumbnail} />
                <p>
                  {soon[lang]} : {event[0].theme}<br/>{event[0].date}
                </p>
              </div>
            )
        }
        if(today < eventdate) {
          return( 
            <a className="archive__list__event archive__list__event--future" href={`mailto:${event.email}`}>
              <img src={event[0].thumbnail} />
              <p>
                {soon[lang]} : {event[0].theme}<br/>{event[0].date}
              </p>
            </a>
          )}        
      })}
    </div>
  )
}

export default ArchiveList
