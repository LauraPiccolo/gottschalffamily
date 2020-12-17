import Introduction from '../components/Introduction'
// import { getThemes } from '../lib/api'
import { getHome } from '../lib/api'

const Home = ({ content }) => {

  console.log(content);

  return (
    <div id="home__intro">
      <Introduction />
    </div>
  )
}

export async function getStaticProps({ preview = null }) {
  const content = (await getHome(preview)) || []
  return {
      props: { content },
  }
}


export default Home
