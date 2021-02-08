import { useEffect, useState } from 'react'
import { getThemes } from '../lib/api'

import ArchiveList from '../components/Archive/ArchiveList'
import ArchiveLocations from '../components/Archive/ArchiveLocations'
import locations from '../locations.js';
import { ThemeContext } from 'styled-components';

const Archive = ({ lang, themes }) => {

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  })

  const [selectedLocation, setSelectedLocation] = useState(0);

  const eventList = locations.map((location) => (
    themes.map((theme) => (
      theme.content.events.filter((event) => event.location[0] === location.name.toLowerCase()).map((event) => ({
          theme: theme.content.Title,
          date: event.date.replace(' 00:00','').replace(/-/g, '.').split('.').reverse().join('.'),
          link:`${event.location[0]}-${theme.content.Title}`,
          thumbnail: event.thumbnail.filename,
          filled: event.filled,
          email: event.registration_email.email
        })
      )
    ))
  ));

  
  return (
    <div id="archive">
      <ArchiveLocations locations={locations} lang={lang} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
      <ArchiveList eventList={eventList[selectedLocation]} lang={lang}/>
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const themes = (await getThemes(preview)) || []
  return {
      props: { themes },
  }
}

export default Archive
