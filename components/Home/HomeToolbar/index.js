import Link from 'next/link'

const HomeToolbar= ({ navList }) => {

  const pages = ['storyfeld','warum','wie','wer','wo','premiere'];

  return (
    <div className="home__toolbar">
      <nav className="home__toolbar__nav">
        <ul>
          {
            navList.map((section, index) => (
              <li>
                <Link 
                className="home__toolbar__nav__link"
                activeClassName="home__toolbar__nav__link--active"
                href={`/home/${pages[index]}`}>
                  {
                  section === 'Storyfeld' ? (<h1>{section}</h1>) : (section)}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default HomeToolbar;
