const ArchiveToolBar = ({setArchiveMode, archiveMode, lang}) => {

  const placeText = {
    de:'BESTELLUNG NACH ORT',
    en: 'ORDER BY PLACE',
    ar:'ترتيب حسب المكان'
  }

  const themeText = {
    de:'BESTELLUNG NACH THEMA',
    en: 'ORDER BY THEME',
    ar: 'ترتيب حسب الموضوع'
  }

  return (
    <div className="archive__toolbar">
      <button className={`archive__toolbar__button${archiveMode === 'place' ? ' archive__toolbar__button--selected':''}`} onClick={() => setArchiveMode('place')}>{placeText[lang]}</button>
      <button className={`archive__toolbar__button${archiveMode === 'theme' ? ' archive__toolbar__button--selected':''}`} onClick={() => setArchiveMode('theme')}>{themeText[lang]}</button>
    </div>
  )
}

export default ArchiveToolBar
