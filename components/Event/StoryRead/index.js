import { render } from "storyblok-rich-text-react-renderer"

const StoryRead = ({ text, photo }) => {

    return (
      <div className="story__read">
          <img src={photo} />
          <p>{render(text)}</p>
      </div>
    );
  };
  
  export default StoryRead;
  