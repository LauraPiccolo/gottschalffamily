import Link from 'next/link'

const HomeToolbar= ({ navList, current }) => {

  const pages = ['was','warum','wie','wer','wo'];

  return (
    <div className="home__toolbar">
      <nav className="home__toolbar__nav">
        <ul>
          {
            navList.map((section, index) => (
              <li className={`home__toolbar__nav__link${pages[index] === current ? ' home__toolbar__nav__link--active':''}`}key={section}>
                <Link 
                activeClassName="home__toolbar__nav__link--active"
                href={`/home/${pages[index]}`}>
                  {section}
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
