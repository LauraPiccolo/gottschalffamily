import Link from 'next/link'
import { useRouter } from 'next/router'
import Languages from '../Languages'
import Credits from '../Home/Credits'

const Menu = ({ headerSections, setLang, lang}) => {

  const router = useRouter();
  const navLinks = ["/home/was","/now","/archive","/book"]
  const navLinksMicro = ["/home","/now","/archive","/book"]

  const closeMenu = () => {
      document.querySelector('.menu--open').classList.remove('menu--open');
  }

  const aboutText = {
    en: 'About',
    de: 'Über',
    ar: 'حول'
  }

  return (
    <div className="menu">
      <nav className="menu__nav">
        <ul className="menu__nav__ul">
          {
            headerSections.map((name, index) => (
              <li className={`menu__nav__li${router.pathname.indexOf(navLinksMicro[index]) >= 0 ? ' menu__nav__li--active':''}`} key={name}>
                <Link href={navLinks[index]}>{name === 'Storyfeld' ? aboutText[lang] : name}</Link>
              </li>
            ))
          }
          <li>
          <Languages setLang={setLang} currentLang={lang} />
          </li>
        </ul>
      </nav>
      <Credits lang={lang} impressum='blabla'/>
    </div>
  );
};

export default Menu;
