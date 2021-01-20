import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ headerSections }) => {

  const router = useRouter();
  const navLinks = ["/home/was","/now","/archive","/book"]
  const navLinksMicro = ["/home","/now","/archive","/book"]

  const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('menu--open');
  }

  return (
    <header className="header">
      <nav className="header__nav header__nav--desktop">
        <ul>
          {
            headerSections.map((name, index) => (
              <li className={`header__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' header__nav__li--active':''}`}>
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
                  <li className={`header__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' header__nav__li--active':''}`}>
                    Storyfelder — {name === 'Storyfeld' ? 'about' : name}
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
