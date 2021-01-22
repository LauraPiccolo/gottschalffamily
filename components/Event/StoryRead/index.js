import { render } from "storyblok-rich-text-react-renderer"

const StoryRead = ({ text, photo }) => {

    return (
      <div className="story__read">
          <img src={photo} />
          <div>{render(text)}</div>
      </div>
    );
  };
  
  export default StoryRead;
  