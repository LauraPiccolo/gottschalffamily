import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ headerSections }) => {

  const router = useRouter();
  const navLinks = ["/home/was","/now","/archive","/book"]
  const navLinksMicro = ["/home","/now","/archive","/book"]


  return (
    <header className="header">
      <nav className="header__nav">
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
    </header>
  );
};

export default Header;
