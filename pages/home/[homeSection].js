import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getHome } from '../../lib/api'

import MainText from '../../components/Home/MainText'
import PlayButton from '../../components/Home/PlayButton'
import FullScreenVideo from '../../components/Home/FullScreenVideo'
import Player from '../../components/Home/Player'
import Credits from '../../components/Home/Credits'
import Sticker from '../../components/Sticker'
import $ from 'jquery'
// FETCH
import staticContent from '../../data'

import HomeToolbar from '../../components/Home/HomeToolbar'

export default function homeSection({ fetchedContent, lang }) {

  console.log('LANGUE: '+lang);
  const router = useRouter()
  const pages = ['was','warum','wie','wer','wo']
  lang="de"

  const [next, setNext] = useState(1);
  const [location, setLocation] = useState(router.query.homeSection);

  const impressumText = fetchedContent.Impressum;

  const content = {
    ...staticContent,
    de: {
      ...staticContent.de,
      content: {
        was: fetchedContent.Was_de,
        warum: fetchedContent.Warum_de,
        wie: fetchedContent.Wie_de,
        wer: fetchedContent.Wer_de,
        wo: fetchedContent.Wo_de,
      }
    },
    en: {
      ...staticContent.en,
      content: {
        was: fetchedContent.Was_en,
        warum: fetchedContent.Warum_en,
        wie: fetchedContent.Wie_en,
        wer: fetchedContent.Wer_en,
        wo: fetchedContent.Wo_en,
      }
    },
    ar: {
      ...staticContent.ar,
      content: {
        was: fetchedContent.Was_ar,
        warum: fetchedContent.Warum_ar,
        wie: fetchedContent.Wie_ar,
        wer: fetchedContent.Wer_ar,
        wo: fetchedContent.Wo_ar,
      }
    }
  };

  const index = () => {
    let pageIndex;
    pages.forEach((page, index) => {
      if(router.query.homeSection == page) pageIndex = index;
    });
    return pageIndex
  }

  useEffect(() => {
    setNext(index() === pages.length - 1 ? 0 : index() + 1);
    setLocation(router.query.homeSection);
  }, [router.query.homeSection])

  const closePicture = (event) => {
    event.target.style.display = 'none'
    hideCross();
  }

  const crossCursor = (e) => {
    $('.cross-cursor').offset({
      left: e.pageX - 40,
      top: e.pageY - 40
    });
  }

  const showCross = (event) => {
    document.querySelector('.cross-cursor').style.display = 'block';
    crossCursor(event);
  }

  const hideCross = () => {
    document.querySelector('.cross-cursor').style.display = 'none';
  }

  return (
    <div className="home">
      <img className="arrow-cursor" src="/black-arrow.png" alt="cursor" />
      <img className="cross-cursor" src="/cross.png" alt="cursor" />
      <img className="cities--big" 
      src="/city.png" 
      alt="wo" 
      onClick={(event) => closePicture(event)}
      onMouseMove={(event) => crossCursor(event)}
      onMouseEnter={(event) => showCross(event)}
      onMouseLeave={hideCross}
      />
      <Sticker content={content[lang].sticker} />
      <HomeToolbar navList={content[lang].navList} current={router.query.homeSection}/>
      <PlayButton />
      <FullScreenVideo lang={lang} />
      <Player audioFile={content[lang].audioFile}/>
      <MainText title={content[lang].titles[index()]} content={content[lang].content[location]} next={pages[next]} location={location} lang={lang}/>
      <Credits lang={lang} impressum={impressumText}/>
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const fetchedContent = (await getHome(preview)) || []
  return {
      props: { fetchedContent },
  }
}