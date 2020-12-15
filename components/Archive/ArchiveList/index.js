import Link from 'next/link'

const ArchiveList = ({ archiveMode, archiveList }) => {

  return (
    <div id="archive__list">
      {
        archiveMode === 'place' && (
          <ul>
          {
          archiveList.place.map((place) => (
            <li className="archive__list__item archive__list__item--place">
              <h2 className="archive__list__item__title">{place.city}</h2>
              <div className="archive__list__item__events">
                <ul>
                  {
                    place.events.map((event) => (
                      <li>
                        <Link href={`/${event.link}`}>
                          <h3>{event.theme}</h3>
                          {/* <h3>{event.date}</h3> */}
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
    </div>
  )
}

export default ArchiveList
