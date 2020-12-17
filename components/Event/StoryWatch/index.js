const StoryWatch = ({ video }) => {

    return (
      <div className="story__watch">
        <video controls>
            <source src={video} />
        </video>
      </div>
    );
  };
  
  export default StoryWatch;
  