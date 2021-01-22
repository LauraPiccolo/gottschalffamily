import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEvents } from '../../lib/api'

// FETCH
// import staticContent from '../../data'
import EventToolBar from '../../components/Event/EventToolBar'
import StoryRead from '../../components/Event/StoryRead'
import StoryWatch from '../../components/Event/StoryWatch'
import StoryListen from '../../components/Event/StoryListen'
import EventFeedback from '../../components/Event/EventFeedback'

export default function event({ fetchedContent, lang }) {

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  })

  const router = useRouter()
  const [location, setLocation] = useState(router.query.event)
  const [media, setMedia] = useState('read');
  const place = location.split('-')[0]
  const theme = location.split('-')[1]
  const stories = [1,2,3];

  const modes = ['read','watch','listen','feedback','surprise']

  useEffect(() => {
    if(media === "surprise") {
      const randomNumber = Math.round(Math.random()*3);
      setMedia(modes[randomNumber]);
    }              
  },[media])

  const eventInfo = fetchedContent;

  return (
    <div className="event">
      <div className="event-wrapper">
        <div className="event__info">
          <h2 className="event__info__theme">{theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
          <h2 className="event__info__dateplace">{place.charAt(0).toUpperCase() + place.slice(1)} — {eventInfo.date.replace(' 00:00','').replace(/-/g, '.').split('.').reverse().join('.')}</h2>
        </div>
        <EventToolBar media={media} setMedia={setMedia} lang={lang}/>
        { media !== 'feedback' && (
          <div className="event__stories">
            {
              stories.map((index) => (
                <div className="event__stories__single" key={index}>
                <h3 className="event__stories__single__title">{eventInfo[`Title${index}`]}</h3>
                <div className="event__stories__single__content">
                  { media === 'read' && ( <StoryRead text={eventInfo[`Text${index}`]} photo={eventInfo[`Photo${index}`].filename}/> )}
                  { media === 'watch' && ( <StoryWatch video={eventInfo[`Video${index}`]} /> )}
                  { media === 'listen' && ( <StoryListen audio={eventInfo[`Audio${index}`]}/> )}
                </div>
              </div>
              ))
            }
          </div>
          )
        }
        { media === 'feedback' && ( <EventFeedback medias={eventInfo.Feedback_medias}/> )}
      </div>
      <EventToolBar media={media} setMedia={setMedia} lang={lang}/>
    </div>
  )
}

export async function getServerSideProps({preview=null, params}) {
  const location = params.event;
  const place = location.split('-')[0]
  const theme = location.split('-')[1]
  const fetchedContent = (await getEvents(`${place}/${theme}`)) || []
  return {
      props: { fetchedContent },
  }
}