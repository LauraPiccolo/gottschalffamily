import EventList from '../components/Now/EventList';
import Theme from '../components/Now/Theme';
import { getThemes } from '../lib/api'
import { useEffect } from 'react';

const Now = ({ lang, themes }) => {

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  })

  const currentThemes = themes.filter((theme) => theme.content.Timing[0] === "future");

  return (
    <div className="now">
      {
        currentThemes.map((theme )=> (
          <div className="now__block" key={theme}>
            <Theme theme={theme.content}/>
            <EventList theme={theme.content} lang={lang} eventAll={theme.content.events}/>
          </div>
        ))
      }
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const themes = (await getThemes(preview)) || []
  return {
      props: { themes },
  }
}

export default Now
