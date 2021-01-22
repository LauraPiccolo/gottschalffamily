import Link from 'next/link'
import { useEffect, useState } from 'react'

const ArchiveList = ({ archiveMode, archiveList }) => {

  const [open, setOpen] = useState(0);

  // const changeOpen = (event) => {
  //    const currentScroll = event.currentTarget.scrollTop;
  //    const maxScroll = event.currentTarget.querySelector('ul').clientHeight - event.target.clientHeight;
  //    const ratio = maxScroll / archiveList[archiveMode].length;
  //    setOpen(Math.round(currentScroll / ratio / 20));
  // }

  // useEffect(() => {
  //   document.querySelector('.archive__list__secret-scroll').style.height = document.querySelector('.archive__list ul').clientHeight*2 + 'px';
  // })

  return (
    <div className="archive__list" onScroll={(event) => changeOpen(event)}>
      {
        archiveMode === 'place' && (
          <ul className="archive__list--ul">
          {
          archiveList.place.map((place, index) => (
            <li className={`archive__list__item archive__list__item--place ${index === open? 'archive__list__item--open':'archive__list__item--closed'}`} key={`${place.city}--${index}`}>
              <h2 className="archive__list__item__title">{place.city}</h2>
              <div className="archive__list__item__events">
                <ul>
                  {
                    place.events.map((event, index) => (
                      <li key={`${event.date}--${index}`}>
                        <Link href={`/archive/${place.city}-${event.theme.toLowerCase()}`}>
                          <a>
                          <h3>{event.theme}</h3>
                          <h3>{event.date}</h3>
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          ))
          }
        </ul>
        )
      }
      {
        archiveMode === 'theme' && (
          <ul className="archive__list--ul">
          {
          archiveList.theme.map((theme, index) => (
            <li className={`archive__list__item archive__list__item--theme ${index === open? 'archive__list__item--open':'archive__list__item--closed'}`} key={`${theme.title}--${index}`}>
              <h2 className="archive__list__item__title">{theme.title}</h2>
              <div className="archive__list__item__theme">
                <ul>
                  {
                    theme.events.map((event, index) => (
                      <li key={`${event.date}--${index}`}>
                        <Link href={`/${event.city}-${theme}`}>
                          <div>
                            <h3>{event.city}</h3>
                            <h3>{event.date}</h3>
                          </div>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          ))
          }
        </ul>
        )
      }
      {/* <div className="archive__list__secret-scroll"/> */}
    </div>
  )
}

export default ArchiveList
