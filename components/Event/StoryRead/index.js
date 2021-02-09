import { render } from "storyblok-rich-text-react-renderer"
import { useState, useEffect } from "react";

const StoryRead = ({ text, photo }) => {

  const [textIndex, setTextIndex] = useState(0);

  const changeText = (index) => {
    setTextIndex(index);
    // document.querySelector('.story__read audio').load();
  }

  console.log(text[0])

    return (
      <div className="story__read">
          <img src={photo} />
          <div>{render(text[0].content)}</div>
          {
          text.length > 0 && (
            <div className="story__read__lang">
              {
                text.map((text, index) => (
                  <div key={text.language} className={`story__read__lang__option story__read__lang__option--${text.language} ${textIndex === index ? ' story__read__lang__option--active':''}`} onClick={() => changeText(index)}>{text.language}</div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  };
  
  export default StoryRead;
  