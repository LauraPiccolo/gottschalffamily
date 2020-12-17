const EventToolBar = ({ media, setMedia }) => {

    const modes = ['read','watch','listen','feedback','surprise']

    return (
      <div className="event__toolbar">
          {
              modes.map((mode) => (
                <button className={`event__toolbar__button${media === mode ? ' event__toolbar__button--selected':''}`} onClick={() => setMedia(mode)}>{mode === 'surprise' ? 'Surprise me!' : mode}</button>
              ))
          }
      </div>
    );
  };
  
  export default EventToolBar;
  