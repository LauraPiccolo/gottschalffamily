import { useState } from "react";

const StoryWatch = ({ video }) => {

    const [videoIndex, setVideoIndex] = useState(0);

    console.log(video);

    const changeVideo = (index) => {
      setVideoIndex(index);
      document.querySelector('.story__watch video').load();
    }

    return (
      <div className="story__watch">
        <video controls>
            <source src={video[videoIndex].filename} />
        </video>
        {
          video.length > 0 && (
            <div className="story__watch__lang">
              {
                video.map((lang, index) => (
                  <div key={lang} className={`story__watch__lang__option story__watch__lang__option--${lang} ${videoIndex === index ? ' story__watch__lang__option--active':''}`} onClick={() => changeVideo(index)}>{lang.alt}</div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  };
  
  export default StoryWatch;
  