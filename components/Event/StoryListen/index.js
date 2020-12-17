const StoryListen = ({ audio }) => {

    return (
      <div className="story__listen">
          <audio controls>
              <source src={audio} />
          </audio>
      </div>
    );
  };
  
  export default StoryListen;
  