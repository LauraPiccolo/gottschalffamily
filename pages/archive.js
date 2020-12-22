import { useState } from 'react'
import { getThemes, getEventList } from '../lib/api'

import ArchiveList from '../components/Archive/ArchiveList'
import ArchiveToolBar from '../components/Archive/ArchiveToolBar'

const Archive = ({ themes, events }) => {

  const archivedThemes = themes.filter((theme) => theme.content.Timing[0] === "archived")

  const newThemes = archivedThemes.map((theme) => ({
    title: [theme.content.Title],
    events: [...events.map((event) => ({
      city: event.full_slug.split('archived-events/').pop().split('/')[0],
      date: event.content.date.replace(' 00:00','').replace(/-/g,'.'),
      link: `${event.full_slug.split('archived-events/').pop().split('/')[0]}-${theme.content.title}`
    }))],
  }))

  let cityList = [];
  events.forEach(element => {
    let exists = false;
    const thisCity = element.full_slug.split('archived-events/').pop().split('/')[0]
    cityList.forEach((city) => {
      if (city === thisCity) exists = true;
    })
    if(!exists) cityList.push(thisCity);
  });

  const newPlaces = cityList.map((city) => ({
    city: city,
    events: events.filter((event) => event.full_slug.split('archived-events/').pop().split('/')[0] === city).map((event) => ({
      theme: event.content.theme.name,
      date: event.content.date.replace(' 00:00','').replace(/-/g,'.'),
      link:`${event.full_slug.split('archived-events/').pop().split('/')[0]}-${event.content.theme.name}`,
    }))
  }))

  const archiveList = {
    theme: [
      ...newThemes
    ],
    place: [
      ...newPlaces
    ]
  }

  const [archiveMode, setArchiveMode] = useState('place');
  
  return (
    <div id="archive">
      <ArchiveToolBar archiveMode={archiveMode} setArchiveMode={setArchiveMode}/>
      <ArchiveList archiveMode={archiveMode} archiveList={archiveList}/>
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const themes = (await getThemes(preview)) || []
  const events = (await getEventList(preview)) || []
  return {
      props: { themes, events },
  }
}

export default Archive
