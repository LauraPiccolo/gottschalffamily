
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import $ from 'jquery';

// == Composant
const Introduction = ({ }) => {


  const showArrow = (event) => {
    document.querySelector('.arrow-cursor').style.display = 'block';
    arrowCursor(event)
  }

  const arrowCursor = (e) => {
    $('.arrow-cursor').offset({
      left: e.pageX - 50,
      top: e.pageY - 20
    });
  }

  return (
    <Link to="/storyfeld" onClick={(event) => showArrow(event)}>
      <section className="introduction">
        <img className="introduction__image introduction__image--mobile" src="intro-mobile.jpg" />
        <img className="introduction__image introduction__image--desktop" src="intro-desktop.jpeg" />

        <h1 className="introduction__title introduction__title--mobile">S T O R Y F E L D</h1>
        <h1 className="introduction__title introduction__title--desktop">S T O R Y F E L D</h1>
        <p className="introduction__subtitle introduction__subtitle--mobile">Hier entsteht durch Storys Neues.</p>
        <p className="introduction__subtitle introduction__subtitle--desktop">Hier entsteht durch Storys Neues.</p>
      </section>
    </Link>
  );
};

// == Export
export default Introduction;
