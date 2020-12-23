const EventToolBar = ({ media, setMedia, lang }) => {

    lang='en';
    const modes = {
      en: ['read','watch','listen','feedback','surprise'],
      ar: ['اقرأ',
      'راقب',
      'استمع',
      'ردود الفعل',
      'مفاجأة'
    ],
      de: ["Lesen", "Anschauen", "Zuhören", "Feedback", "Überraschung"]
    }

    return (
      <div className="event__toolbar">
          {
              modes[lang].map((mode) => (
                <button className={`event__toolbar__button${media === mode ? ' event__toolbar__button--selected':''}`} onClick={() => setMedia(mode)}>{mode === 'surprise' ? 'Surprise me!' : mode}</button>
              ))
          }
      </div>
    );
  };
  
  export default EventToolBar;
  