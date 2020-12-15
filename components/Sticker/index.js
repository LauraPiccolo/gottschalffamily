import Draggable from 'react-draggable';

const Sticker = ({ content }) => {
    return (
    <Draggable>
      <div className="stickerContainer">     
        <div className="sticker"> 
            <p className="sticker__text" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    </Draggable>
    );
};

export default Sticker;
