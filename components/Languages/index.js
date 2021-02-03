
const Languages = ({ setLang, currentLang }) => {

  const languages = ['de','en','ar'];

  const changeLanguage = (event, lang) => {
    const parent = event.target.parentElement.parentElement.parentElement.parentElement.className;
    if(window.innerWidth >= 700 || parent === 'menu__nav__ul') {
      event.preventDefault(); 
      setLang(lang);
    }
  }

  const toggleMenu = (event) => {
    if(event.currentTarget.parentElement.className === "container") {
      if(document.body.clientWidth <= 750) {
        document.querySelector('.menu').classList.toggle('menu--open');
      }
    }
  }

  return (
    <nav className="languages" onClick={(event) => toggleMenu(event)}>
      <ul>
        {
          languages.map((lang) => (
            <li 
            onClick={(event) => changeLanguage(event, lang)} 
            className={`${lang === currentLang ? 'languages__active':''}`} key={lang}>
              {lang}
            </li>
          ))
        }
          <li className="header__menu" /> 
      </ul>
    </nav>
  );
};

// == Export
export default Languages;
