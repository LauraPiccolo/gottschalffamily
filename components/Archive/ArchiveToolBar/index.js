const ArchiveToolBar = ({setArchiveMode, archiveMode}) => {

  return (
    <div className="archive__toolbar">
      <button className={`archive__toolbar__button${archiveMode === 'place' ? ' archive__toolbar__button--selected':''}`} onClick={() => setArchiveMode('place')}>ORDER BY PLACE</button>
      <button className={`archive__toolbar__button${archiveMode === 'theme' ? ' archive__toolbar__button--selected':''}`} onClick={() => setArchiveMode('theme')}>ORDER BY THEME</button>
    </div>
  )
}

export default ArchiveToolBar
