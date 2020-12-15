const EventList = ({ eventList }) => {

  // FETCH
  eventList = [
    {
      city: 'Berlin',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
    {
      city: 'Hamburg',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
    {
      city: 'Köln',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
    {
      city: 'Berlin',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
    {
      city: 'Hamburg',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
    {
      city: 'Köln',
      date: '10.10.2020',
      live: 'https://flaviocopes.com/nextjs-active-link/',
      register: 'https://flaviocopes.com/nextjs-active-link/',
    },
  ]

  return (
    <div className="now__events">
      <ul>
      {
        eventList.map((event) => (
          <li className="now__events__event">
            <h3>{event.city}</h3>
            <div className="now__events__event__info">
              <a className="now__events__event__info__register" href={event.register} target="blank">Register</a>
              <a className="now__events__event__info__live" href={event.live} target="blank">Link to livestream</a>
              <span className="now__events__event__info__date">{event.date}</span>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default EventList
