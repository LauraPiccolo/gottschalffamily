
import { useEffect} from 'react';

const Player = ({ audioFile }) => {

  useEffect(() => {
    document.querySelector('.player__audio').load();
  },[audioFile])

  return (
    <div className="player">
      <span className="player__cursor"/>
      <audio className="player__audio">
        <source src={`/audios/${audioFile}`} />
      </audio>
    </div>
  );
};

export default Player;
