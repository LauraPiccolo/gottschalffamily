import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getThemes} from '../../lib/api'

// FETCH
// import staticContent from '../../data'
import EventToolBar from '../../components/Event/EventToolBar'
import StoryRead from '../../components/Event/StoryRead'
import StoryWatch from '../../components/Event/StoryWatch'
import StoryListen from '../../components/Event/StoryListen'
import EventFeedback from '../../components/Event/EventFeedback'

export default function event({ themes, lang }) {

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  }, [])

  const router = useRouter()
  const [location, setLocation] = useState(router.query.event)
  const [media, setMedia] = useState('read');
  const place = location.split('-')[0]
  const theme = location.split('-')[1]
  const stories = [1,2,3];

  console.log(theme, place);

  const modes = ['read','watch','listen','feedback','surprise']

  useEffect(() => {
    if(media !=='feedback') document.querySelector('.event__stories').scrollTo(0,0);
    if(media === "surprise") {
      const randomNumber = Math.round(Math.random()*3);
      setMedia(modes[randomNumber]);
      if(modes[randomNumber] !=='feedback') document.querySelector('.event__stories').scrollTo(0,0);
    }              
  },[media])

  const eventInfo = themes.filter((themee) => themee.content.Title === theme)[0].content.events.filter((event) => event.location[0] === place)[0];

  console.log(eventInfo.stories);

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
              eventInfo.stories.map((story, index) => (
                <div className="event__stories__single" key={index}>
                <h3 className="event__stories__single__title">{story.Title}</h3>
                <div className="event__stories__single__content">
                  { media === 'read' && ( <StoryRead text={story.Text} photo={story.Photo.filename}/> )}
                  { media === 'watch' && ( <StoryWatch video={story.Video} /> )}
                  { media === 'listen' && ( <StoryListen audio={story.Audio}/> )}
                </div>
              </div>
              ))
            }
          </div>
          )
        }
        { media === 'feedback' && ( <EventFeedback medias={eventInfo.feedback}/> )}
      </div>
      <EventToolBar media={media} setMedia={setMedia} lang={lang}/>
    </div>
  )
}

// export async function getServerSideProps({preview=null, params}) {
//   const location = params.event;
//   const place = location.split('-')[0]
//   const theme = location.split('-')[1]
//   const fetchedContent = (await getEvents(`${place}/${theme}`)) || []
//   return {
//       props: { fetchedContent },
//   }
// }

export async function getServerSideProps({ preview = null }) {
  const themes = (await getThemes(preview)) || []
  return {
      props: { themes },
  }
}
