
import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// == Import
// import './style.css';
import Draggable from 'react-draggable';


// == Composant
const Sticker = ({ content }) => {
    return (
    <Draggable>
      <div className="stickerContainer">     
        <div className="sticker"> 
          {/* <NavLink to="/premiere"> */}
            <p className="sticker__text" dangerouslySetInnerHTML={{__html: content}} />
          {/* </NavLink> */}
        </div>
      </div>
    </Draggable>
    );
};

// == Export
export default Sticker;
