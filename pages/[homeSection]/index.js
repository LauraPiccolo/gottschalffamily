import { useRouter } from 'next/router'
import { useEffect } from 'react'

import MainText from '../../components/MainText'
// FETCH
import content from '../../data'

export default function homeSection() {
  const router = useRouter()
  const pages = ['storyfeld','warum','wie','wer','wo','premiere']
  const lang = 'de'

  const index = () => {
    const pageIndex = pages.filter((page => {
      router.query.homeSection == page
    })
    console.log(pageIndex);
    // return pageIndex[0];
  }

  useEffect(() => {index()})
  // console.log(index());
  // const next = index() === pages.length - 1 ? 0 : index() + 1
  // const location = router.query.homeSection;

  useEffect(() => {
    // if(document.body.clientWidth < 700) {
      // document.querySelector('.play-button--black').style.animation = 'unset';
      // setTimeout(() => {document.querySelector('.play-button--black').style.animation = 'grow--mobile 2.5s ease-in-out';}, 500);
    // }
  }, [router.query.homeSection])

  return (
    // <MainText title={content[lang].titles[index()]} content={content[lang].content[location]} next={pages[next]} location={location} lang={lang}/>
    <h1>salu</h1>
  )
}