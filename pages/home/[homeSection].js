import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getHome } from '../../lib/api'

import MainText from '../../components/Home/MainText'
import PlayButton from '../../components/Home/PlayButton'
import FullScreenVideo from '../../components/Home/FullScreenVideo'
import Player from '../../components/Home/Player'
// FETCH
import staticContent from '../../data'

import HomeToolbar from '../../components/Home/HomeToolbar'

export default function homeSection({ fetchedContent }) {
  const lang = 'de'
  const router = useRouter()
  const pages = ['storyfeld','warum','wie','wer','wo']

  const [next, setNext] = useState(1);
  const [location, setLocation] = useState(router.query.homeSection);

  const content = {
    ...staticContent,
    de: {
      ...staticContent.de,
      content: {
        storyfeld: fetchedContent.Was_de,
        warum: fetchedContent.Warum_de,
        wie: fetchedContent.Wie_de,
        wer: fetchedContent.Wer_de,
        wo: fetchedContent.Wo_de,
      }
    },
    en: {
      ...staticContent.en,
      content: {
        storyfeld: fetchedContent.Was_en,
        warum: fetchedContent.Warum_en,
        wie: fetchedContent.Wie_en,
        wer: fetchedContent.Wer_en,
        wo: fetchedContent.Wo_en,
      }
    },
    ar: {
      ...staticContent.ar,
      content: {
        storyfeld: fetchedContent.Was_ar,
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
    if(document.body.clientWidth < 700) {
      document.querySelector('.play-button--black').style.animation = 'unset';
      setTimeout(() => {document.querySelector('.play-button--black').style.animation = 'grow--mobile 2.5s ease-in-out';}, 500);
    }
    setNext(index() === pages.length - 1 ? 0 : index() + 1);
    setLocation(router.query.homeSection);
  }, [router.query.homeSection])

  return (
    <div className="home">
      <HomeToolbar navList={content[lang].navList} current={router.query.homeSection}/>
      <PlayButton />
      <FullScreenVideo lang={lang} />
      <Player audioFile={content[lang].audioFile}/>
      <MainText title={content[lang].titles[index()]} content={content[lang].content[location]} next={pages[next]} location={location} lang={lang}/>
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const fetchedContent = (await getHome(preview)) || []
  return {
      props: { fetchedContent },
  }
}