import { useEffect, useState } from "react"

const EventList = ({ theme }) => {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const events = [];
    for(let index = 1 ; index < 50 ; index ++) {
      if(theme[`City_name_${index}`] !== undefined) {
        const newCity = {
          city: theme[`City_name_${index}`],
          date: theme[`City_date_${index}`],
          live: theme[`City_stream_link_${index}`].url,
          register: theme[`City_register_link_${index}`].email,
          people: theme[`City_people_${index}`],
        }
       events.push(newCity);
      }
      setEventList(events);
    }
  }, [theme]);

  return (
    <div className="now__events">
      <ul>
      {
        eventList.map((event) => (
          <li className="now__events__event">
            <h3>{event.city}<span className="now__events__event__date">{event.date.replace(' 00:00','').replace(/-/g, '.')}</span></h3>
            <div className="now__events__event__people">
              {
                event.people !== "" && (
                  <p>{event.people}</p>
                )
              }
              </div>
            <div className="now__events__event__info">
              <a className="now__events__event__info__register" href={`mailto:${event.register}`}>Register</a>
              <a className="now__events__event__info__live" href={event.live} target="_blank">Link to livestream</a>
              <span className="now__events__event__info__date">{event.date.replace(' 00:00','').replace(/-/g, '.')}</span>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default EventList
