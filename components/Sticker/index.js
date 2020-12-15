import Draggable from 'react-draggable';
import Link from 'next/link'

const Sticker = ({ content }) => {
    return (
    <Draggable>
        <div className="stickerContainer">     
          <div className="sticker"> 
              <Link href="/book">
                <p className="sticker__text" dangerouslySetInnerHTML={{__html: content}} />
              </Link>
          </div>
        </div>
    </Draggable>
    );
};

export default Sticker;
