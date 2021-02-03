import { useState, useEffect } from "react";

const StoryListen = ({ audio }) => {

    const [audioIndex, setAudioIndex] = useState(0);

    const changeAudio = (index) => {
      setAudioIndex(index);
      document.querySelector('.story__listen audio').load();
    }

    useEffect(() => {
    }, []);

    return (
      <div className="story__listen">
          <audio controls className="story__listen__player">
            <source src={audio[audioIndex].filename} />
          </audio>
          {
          audio.length > 0 && (
            <div className="story__listen__lang">
              {
                audio.map((lang, index) => (
                  <div key={lang} className={`story__listen__lang__option story__listen__lang__option--${lang} ${audioIndex === index ? ' story__listen__lang__option--active':''}`} onClick={() => changeAudio(index)}>{lang.alt}</div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  };
  
  export default StoryListen;
  