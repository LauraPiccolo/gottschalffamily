import Link from 'next/link'
import { useRouter } from 'next/router'
import Languages from '../Languages'

const Menu = ({ headerSections, setLang, lang}) => {

  const router = useRouter();
  const navLinks = ["/home/was","/now","/archive","/book"]
  const navLinksMicro = ["/home","/now","/archive","/book"]

  const closeMenu = () => {
      setTimeout(() => {document.querySelector('.menu--open').classList.remove('menu--open');}, 600)
  }

  return (
    <div className="menu">
      <nav className="menu__nav">
        <ul>
          {
            headerSections.map((name, index) => (
              <li className={`menu__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' menu__nav__li--active':''}`} onClick={closeMenu}>
                <Link href={navLinks[index]}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <Languages setLang={setLang} currentLang={lang} />
    </div>
  );
};

export default Menu;
