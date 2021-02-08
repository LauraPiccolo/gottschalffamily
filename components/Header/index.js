import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ headerSections, lang }) => {

  const router = useRouter();
  const navLinks = ["/home/was","/bald","/stories","/book"]
  const navLinksMicro = ["/home","/bald","/stories","/book"]

  const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('menu--open');
  }

  const aboutText = {
    en: 'About',
    de: 'Über',
    ar: 'حول'
  }

  return (
    <header className="header">
      <nav className="header__nav header__nav--desktop">
        <ul>
          {
            headerSections.map((name, index) => (
              <li className={`header__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' header__nav__li--active':''}`} key={name}>
                <Link href={navLinks[index]}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className="header__nav header__nav--mobile" onClick={toggleMenu}>
        <ul>
          {
            headerSections.map((name, index) => {
              if(router.pathname.indexOf(navLinksMicro[index]) >= 0) {
                return (
                  <li className={`header__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' header__nav__li--active':''}`} key={name}>
                    Storyfelder — {name === 'Storyfeld' ? aboutText[lang] : name}
                  </li>
                )}
              
              })
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
