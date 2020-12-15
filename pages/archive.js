import { useState } from 'react'

import ArchiveList from '../components/Archive/ArchiveList'
import ArchiveToolBar from '../components/Archive/ArchiveToolBar'

const Archive = () => {

  const [archiveMode, setArchiveMode] = useState('place');
  const archiveList = {
    place: [
      {
        city: 'Berlin',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        city: 'Hamburg',
        events: [
          {
            theme: 'Happiness',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Event2',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            theme: 'Happiness',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      
    ],

    theme: [
      {
        title: 'Happiness',
        events: [
          {
            city: 'Berlin',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            city: 'Hamburg',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            city: 'Köln',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
      {
        title: 'Sadness',
        events: [
          {
            city: 'Berlin',
            date: '10.12.2020',
            link: '/archive/berlin/happiness'
          },
          {
            city: 'Hamburg',
            date: '10.08.2020',
            link: '/archive/berlin/happiness'
          },
          {
            city: 'Köln',
            date: '07.01.2022',
            link: '/archive/berlin/happiness'
          }
        ]
      },
    ]
  }

  return (
    <div id="archive">
      <ArchiveToolBar archiveMode={archiveMode} setArchiveMode={setArchiveMode}/>
      <ArchiveList archiveMode={archiveMode} archiveList={archiveList}/>
    </div>
  )
}

export default Archive
