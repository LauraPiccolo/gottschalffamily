import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import MainText from '../../components/Home/MainText'
import PlayButton from '../../components/Home/PlayButton'
import FullScreenVideo from '../../components/Home/FullScreenVideo'
import Player from '../../components/Home/Player'
// FETCH
import content from '../../data'
import HomeToolbar from '../../components/HomeToolbar'

export default function homeSection() {
  const router = useRouter()
  const pages = ['storyfeld','warum','wie','wer','wo','premiere']
  const lang = 'de'

  const [next, setNext] = useState(1);
  const [location, setLocation] = useState(router.query.homeSection);

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
      <HomeToolbar navList={content[lang].navList}/>
      <PlayButton />
      <FullScreenVideo lang={lang} />
      <Player audioFile={content[lang].audioFile}/>
      <MainText title={content[lang].titles[index()]} content={content[lang].content[location]} next={pages[next]} location={location} lang={lang}/>
    </div>
  )
}