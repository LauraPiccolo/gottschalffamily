import { useEffect, useState } from "react"

const EventList = ({ eventAll, lang }) => {

  const registerText = {
    de:'anmelden',
    en:'Register',
    ar:'تسجيل'
  }

  const liveText = {
    de:'Link zum Livestream',
    en:'Link to livestream',
    ar:'رابط إلى البث المباشر'
  }

  return (
    <div className="now__events">
      <ul>
      {
        eventAll.map((event, index) => (
          <li className="now__events__event" key={`${event.city}--${index}`}>
            <h3>{event.location}<span className="now__events__event__date">{event.date.replace(' 00:00','').replace(/-/g, '.').split('.').reverse().join('.')}</span></h3>
            <div className="now__events__event__people">
              {
                event.people !== "" && (
                  <p>{event.people}</p>
                )
              }
              </div>
            <div className="now__events__event__info">
              <a className="now__events__event__info__register" href={`mailto:${event.register}`}>{registerText[lang]}</a>
              {
                event.live !== '' && (<a className="now__events__event__info__live" href={event.live} target="_blank">{liveText[lang]}</a>)
              }
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default EventList
