const StoryRead = ({ text, photo }) => {

    return (
      <div className="story__read">
          <img src={photo} />
          <p dangerouslySetInnerHTML={{__html: text}}/>
      </div>
    );
  };
  
  export default StoryRead;
  