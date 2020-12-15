import React, { useEffect, useState } from 'react'
import Introduction from '../Introduction'
import MainText from '../MainText'

const Container = ({ location, lang, content }) => {

  useEffect(() => {
    // if(document.body.clientWidth < 700) {
      document.querySelector('.play-button--black').style.animation = 'unset';
      setTimeout(() => {document.querySelector('.play-button--black').style.animation = 'grow--mobile 2.5s ease-in-out';}, 500);
    // }
  }, [location]);

  const pages = ['storyfeld','warum','wie','wer','wo','premiere'];

  return (
    <div>
              {
                pages.map((page, index) => {

                  const next = index === pages.length - 1 ? 0 : index + 1

                  return (
                    <Route path={`/${page}`}>
                      <MainText title={content[lang].titles[index]} content={content[lang].content['storyfeld']} next={pages[next]} location='page' lang={lang}/>
                    </Route>
                )})
              }
    </div>
  );
};

export default Container
