import Introduction from '../components/Introduction'
import { getThemes } from '../lib/api'

const Home = ({ content }) => {

  console.log(content);

  return (
    <div id="home__intro">
      <Introduction />
    </div>
  )
}

// export async function getStaticProps({ preview = null }) {
//   const content = (await getThemes(preview)) || []
//   return {
//       props: { content },
//   }
// }


export default Home
