import EventList from '../components/Now/EventList';
import Theme from '../components/Now/Theme';
import { getThemes, getEventList } from '../lib/api'

const Now = ({ themes }) => {

  const currentTheme = themes.filter((theme) => theme.content.Timing[0] === "future")[0]

  return (
    <div className="now">
      <Theme theme={currentTheme.content}/>
      <EventList theme={currentTheme.content}/>
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
