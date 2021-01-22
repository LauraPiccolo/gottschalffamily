const EventToolBar = ({ media, setMedia, lang }) => {

    const modes = {
      en: ['read','watch','listen','feedback','surprise'],
      ar: ['اقرأ',
      'راقب',
      'استمع',
      'ردود الفعل',
      'مفاجأة'
      ],
      de: ["Lesen", "Schauen", "Hören", "Feedback", "Zufällig"]
    }

    return (
      <div className="event__toolbar">
          {
              modes[lang].map((mode, index) => (
                <button className={`event__toolbar__button${media === modes.en[index] ? ' event__toolbar__button--selected':''}`} onClick={() => setMedia(modes.en[index])} key={mode}>{index === 5 ? 'Random' : mode}</button>
              ))
          }
      </div>
    );
  };
  
  export default EventToolBar;
  