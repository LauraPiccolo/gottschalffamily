import EventList from '../components/Now/EventList';
import Theme from '../components/Now/Theme';
import { getThemes, getEventList } from '../lib/api'
import { useEffect } from 'react';

const Now = ({ lang, themes }) => {

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  })

  const currentTheme = themes.filter((theme) => theme.content.Timing[0] === "future")[0]

  return (
    <div className="now">
      <Theme theme={currentTheme.content}/>
      <EventList theme={currentTheme.content} lang={lang}/>
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
