import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import { getHome } from '../../lib/api'

// FETCH
// import staticContent from '../../data'
import EventToolBar from '../../components/Event/EventToolBar'
import StoryRead from '../../components/Event/StoryRead'
import StoryWatch from '../../components/Event/StoryWatch'
import StoryListen from '../../components/Event/StoryListen'
import EventFeedback from '../../components/Event/EventFeedback'

export default function event({ fetchedContent }) {

  const router = useRouter()
  const [location, setLocation] = useState(router.query.event)
  const [media, setMedia] = useState('watch');
  const place = location.split('-')[0]
  const theme = location.split('-')[1]
  const stories = [1,2,3];

  const modes = ['read','watch','listen','feedback','surprise']

  useEffect(() => {
    if(media === "surprise") {
      const randomNumber = Math.round(Math.random()*3);
      console.log(randomNumber);
      setMedia(modes[randomNumber]);
    }              
  },[media])

  const data = {
    "story":{
      "name":"Super","created_at":"2020-12-15T16:19:49.080Z","published_at":"2020-12-15T16:49:54.350Z","alternates":[],"id":31354978,"uuid":"3e4cef57-39e0-42c6-b4f0-ac93227325e4","content":{"_uid":"8090198d-24aa-40ed-86f1-cf343b25552c","date":"2020-12-03 00:00","Text1":"wefsdgbg","Text2":"wegrhrerwfgf","Text3":"fewfvweve","theme":"","Audio1":{"id":1745994,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/2322a3b89e/audio_en.mp3","copyright":"","fieldtype":"asset"},"Audio2":{"id":1746003,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/9ce4a214aa/birdcall.mp3","copyright":"","fieldtype":"asset"},"Audio3":{"id":1746070,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/8e1144f73c/birdcall.mp3","copyright":"","fieldtype":"asset"},"Photo1":{"id":1745993,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/567x567/4b6aeff47f/4-2.png","copyright":"","fieldtype":"asset"},"Photo2":{"id":1745996,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/394x623/daba5452f3/punkm3.png","copyright":"","fieldtype":"asset"},"Title1":"Title1","Title2":"Title2","Title3":"33333","Video1":{"id":1745992,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/04d08ce1b5/video-1602068982-1.mp4","copyright":"","fieldtype":"asset"},"Video2":{"id":1745995,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/d646fab1e0/mobpunkt.mp4","copyright":"","fieldtype":"asset"},"Video3":{"id":1746072,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/x/204c56b46d/eucnm1.mp4","copyright":"","fieldtype":"asset"},"Photo3":{"id":1746067,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/258x258/6b08129d6a/bird.png","copyright":"","fieldtype":"asset"},"component":"archived_event","Feedback_medias":[{"id":1746065,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/960x960/4bff20ea15/13814374_10207634033747719_354169608_n.jpg","copyright":""},{"id":1746066,"alt":"","name":"","focus":null,"title":"","filename":"https://a.storyblok.com/f/98782/258x258/c211e1a336/bird.png","copyright":""}],"_editable":"\u003c!--#storyblok#{\"name\": \"archived_event\", \"space\": \"98782\", \"uid\": \"8090198d-24aa-40ed-86f1-cf343b25552c\", \"id\": \"31354978\"}--\u003e"},"slug":"super","full_slug":"archived-events/berlin/super","default_full_slug":null,"sort_by_date":null,"position":0,"tag_list":[],"is_startpage":false,"parent_id":31336945,"meta_data":null,"group_id":"34e3aa3c-85e1-4207-9ce4-a4956fbf04c1","first_published_at":"2020-12-15T16:26:22.197Z","release_id":null,"lang":"default","path":null,"translated_slugs":[]
    }
  }

  const eventInfo = data.story.content
  console.log(eventInfo.Photo1)

  return (
    <div className="event">
      <div className="event__info">
        <h2 className="event__info__theme">{theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
        <h2 className="event__info__dateplace">{place.charAt(0).toUpperCase() + place.slice(1)} — {eventInfo.date.replace(' 00:00', '').replace(/-/g,'.')}</h2>
      </div>
      <EventToolBar media={media} setMedia={setMedia}/>
      { media !== 'feedback' && (
        <div className="event__stories">
          {
            stories.map((index) => (
              <div className="event__stories__single">
              <h3 className="event__stories__single__title">{eventInfo[`Title${index}`]}</h3>
              <div className="event__stories__single__content">
                { media === 'read' && ( <StoryRead text={eventInfo[`Text${index}`]} photo={eventInfo[`Photo${index}`].filename}/> )}
                { media === 'watch' && ( <StoryWatch video={eventInfo[`Video${index}`].filename} /> )}
                { media === 'listen' && ( <StoryListen audio={eventInfo[`Audio${index}`].filename}/> )}
              </div>
            </div>
            ))
          }
        </div>
        )
      }
      { media === 'feedback' && ( <EventFeedback medias={eventInfo.Feedback_medias}/> )}
    </div>
  )
}

// export async function getServerSideProps({ preview = null }) {
//   const fetchedContent = (await getHome(preview)) || []
//   return {
//       props: { fetchedContent },
//   }
// }