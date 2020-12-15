
import React, { useEffect, useState } from 'react';
// import {NavLink} from 'react-router-dom'

// == Import
// import './style.css';


// == Composant
const Header = ({ navList }) => {

  const pages = ['storyfeld','warum','wie','wer','wo','premiere'];

  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          {
            navList.map((section, index) => (
              <li>
                {/* <NavLink 
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                to={`/${pages[index]}`}> */}
                  {
                  section === 'Storyfeld' ? (<h1>{section}</h1>) : (section)}
                {/* </NavLink> */}
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

// == Export
export default Header;
