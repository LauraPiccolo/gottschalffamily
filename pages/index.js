import Introduction from '../components/Introduction'
// import { getThemes } from '../lib/api'
import { getHome } from '../lib/api'

const Home = ({ lang, content }) => {

  console.log(lang)

  return (
    <div id="home__intro">
      <Introduction />
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
