
const Languages = ({ setLang, currentLang }) => {

  const languages = ['de','en','ar'];

  const changeLanguage = (event, lang) => {
    event.preventDefault(); 
    setLang(lang);
  }

  const toggleMenu = () => {
    if(document.body.clientWidth <= 750) {
      document.querySelector('.menu').classList.toggle('menu--open');
    }
  }

  return (
    <nav className="languages" onClick={toggleMenu}>
      <ul>
        {
          languages.map((lang) => (
            <li 
            onClick={(event) => changeLanguage(event, lang)} 
            className={`${lang === currentLang ? 'languages__active':''}`}>
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
