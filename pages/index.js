import { getHome } from '../lib/api'
import { useEffect } from 'react';
import { render } from "storyblok-rich-text-react-renderer"
import Link from 'next/link'

const Home = ({content }) => {

  useEffect(() => {
      setTimeout(() => {
        document.querySelector("h1").style.opacity="1";
      })
  }, [content]);

  return (
    <div id="home">
      <header className="background">
        <div className="background__text">{render(content.first_block)}</div>
      </header>
      <main>{render(content.content)}</main>
      <footer>
        <Link href="/impressum">Impressum</Link>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ preview = null, params}) {
  console.log(params);
  const content = (await getHome(preview)) || []
  return {
      props: { content },
  }
}

export default Home
