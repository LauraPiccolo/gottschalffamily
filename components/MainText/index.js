
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import $ from 'jquery';

const MainText = ({ title, content, next, location, lang }) => {

  // FETCH
  const places = ['Berlin', 'Magdeburg', 'Düsseldorf', 'Dresden', 'Göttingen', 'Hamburg', 'Köln', 'Ruhrgebiet', 'Brandenburg', 'Niedersachsen', 'Nordrhein-Westfalen', 'Hessen', 'Sachsen-Anhalt', 'Sachsen', 'Schleswig-Holstein', 'Mecklenburg-Vorpommern']

  const register = {
    en: 'Register',
    de: 'Anmelden',
    ar: 'تسجيل'
  }

  // FETCH
  const cities = [
    {
      city: 'Dresden',
      dates: {
        en: 'Sat. 12. Dec., 2020    19:00 - 21.00 Hrs<br/>Story-Moderator: Kristin Eubling, with Guest-Storytellers: Jule Richter, Danielle Schoenfeld, and Yaelle Dorison.',
        de: 'Sa. 12. Dez., 2020    19:00 - 21.00 Uhr<br/>Story-Moderatorin: Kristin Eubling, mit Gast-Storyteller:innen Jule Richter, Danielle Schoenfeld, und Yaelle Dorison.',
        ar: 'Sat. 12. Dec., 2020    19:00 - 21.00 Hrs<br/>Story-Moderator: Kristin Eubling, with Guest-Storytellers: Jule Richter, Danielle Schoenfeld, and Yaelle Dorison.'
      }
    },
    {
      city: 'Dortmund',
      dates: {
        en: 'Sun. 13. Dec. 2020   16:30 - 18.30 Hrs<br/>Story-Moderator: Susanne Tiggemann, with Guest-Storytellers André Mensing, Rainer Mensing.',
        de: 'Register – Dortmund  So. 13. Dez. 2020   16:30 - 18.30 Uhr<br/>Story-Moderatorin: Susanne Tiggemann, mit Gast-Storyteller:innen André Mensing, Rainer Mensing. ',
        ar: 'Sun. 13. Dec. 2020   16:30 - 18.30 Hrs<br/>Story-Moderator: Susanne Tiggemann, with Guest-Storytellers André Mensing, Rainer Mensing.'
      }
    },
    {
      city: 'Köln',
      dates: {
        en: 'Sun. 13. Dez, 2020    19:00 – 21.00 Hrs<br/>Story-Moderators: Selma Scheele, Christiane Willms;  Guest Storytellerin Miriam Hofmann.',
        de: 'So. 13. Dez, 2020    19:00 Uhr – 21.00 Uhr<br/>Story-Moderatorinnen: Selma Scheele, Christiane Willms;  Gast Storytellerin Miriam Hofmann',
        ar: 'Sun. 13. Dez, 2020    19:00 – 21.00 Hrs<br/>Story-Moderators: Selma Scheele, Christiane Willms;  Guest Storytellerin Miriam Hofmann.'
      }
    },
    {
      city: 'Hamburg',
      dates: {
        en: 'Wed. 16. Dec. c2020   19:00  – 21.00 Hrs<br/>Story-Moderator: Diana Huth -  with 2 Guest Storytellers, and live Musik',
        de: 'Mi. 16. Dez. 2020   19:00 Uhr – 21.00 Uhr<br/>Story-Moderatorin: Diana Huth -  mit 2 Gast Storyteller:innen, und live Musik',
        ar: 'Wed. 16. Dec. 2020   19:00  – 21.00 Hrs<br/>Story-Moderator: Diana Huth -  with 2 Guest Storytellers, and live Musik'
      }
    },
    {
      city: 'Hannover',
      dates: {
        en: 'Thurs. 17. Dec., 2020   19:00 – 21.00 Hrs<br/>Story-Moderator: Maerena (Verena Maretzki) – with Storytellers Kathinka Marcks, Olaf Steinl',
        de: 'Do. 17. Dez., 2020   19:00 – 21.00 Uhr<br/>Story-Moderatorin: Maerena (Verena Maretzki) – mit Storyteller:innen Kathinka Marcks, Olaf Steinl',
        ar: 'Thurs. 17. Dec., 2020   19:00 – 21.00 Hrs<br/>Story-Moderator: Maerena (Verena Maretzki) – with Storytellers Kathinka Marcks, Olaf Steinl'
      }
    },
    {
      city: 'Magdeburg',
      dates: {
        en: 'Fri. 18. Dez, 2020   16.00 – 18.00 Hrs<br/>Story-Moderator: Jörg Menke-Peitzmeyer – with Mieste Hotopp-Riecke, Mady Host, Ammar Awaniy',
        de: 'Fr. 18. Dez, 2020   16.00 – 18.00 Uhr<br/>Story-Moderatorin: Jörg Menke-Peitzmeyer – mit Mieste Hotopp-Riecke, Mady Host, Ammar Awaniy',
        ar: 'Fri. 18. Dez, 2020   16.00 – 18.00 Hrs<br/>Story-Moderator: Jörg Menke-Peitzmeyer – with Mieste Hotopp-Riecke, Mady Host, Ammar Awaniy'
      }
    },
    {
      city: 'Frankfurt am Main',
      dates: {
        en: 'Sat. 19. Dec. 2020,  19:00 – 21.00 Hrs<br/>Story-Moderator: Tanja Mahn-Bertha – zu Guest: Storytellerin Kathinka Marcks and Shabana Maliki',
        de: 'Sa. 19. Dez. 2020,  19:00 – 21.00 Uhr<br/>Story-Moderatorin: Tanja Mahn-Bertha – zu Gast: Storytellerinnen Kathinka Marcks und Shabana Maliki',
        ar: 'Sat. 19. Dec. 2020,  19:00 – 21.00 Hrs<br/>Story-Moderator: Tanja Mahn-Bertha – zu Guest: Storytellerin Kathinka Marcks and Shabana Maliki'
      }
    }
  ]

  const [placeIndex, setPlaceIndex] = useState(0);
  let index = 0;

  const arrowCursor = (e) => {
    $('.arrow-cursor').offset({
      left: e.pageX - 50,
      top: e.pageY - 20
    });
  }

  const showArrow = (event) => {
    document.querySelector('.arrow-cursor').style.transform = "rotate(0deg)";
    document.querySelector('.arrow-cursor').style.display = 'block';
    arrowCursor(event)
  }

  const hideArrow = () => {
    document.querySelector('.arrow-cursor').style.display = 'none';
  }

  const showCitiesBig = (event) => {
    event.preventDefault()
    document.querySelector('.cities--big').style.display = 'block';
  }

  console.log(next);
  
  useEffect(() => {
    if(location === 'wo') {
      setInterval(() => {
        index = index === places.length - 1 ? 0 : index + 1;
        setPlaceIndex(index);
      }, 2000)
    }
    if(location === 'premiere') {
      $('.main__content--premiere a').on('click', (event) => {event.stopPropagation()});
      $('.main__content--premiere a').on('mouseenter', hideArrow);
      $('.main__content--premiere a').on('mouseleave', showArrow);
    }
  },[location])

  return (
    // <Link to={`/${next}`}>
      <section className={`main main--${lang}`} 
        onMouseMove={(event) => arrowCursor(event)}
        onMouseEnter={(event) => showArrow(event)}
        onMouseLeave={hideArrow}
      >
        <h2 className="main__title">{title}</h2>
        {
          location === 'premiere' && (
            <a href="mailto:event@storyfelder.de" className="main__register"
            onMouseEnter={hideArrow}
            onMouseLeave={(event) => {showArrow(event)}}
            onClick={(event) => {event.stopPropagation()}}
            >{register[lang]}: event@storyfelder.de</a>
          )
        }
        <p dangerouslySetInnerHTML={{__html: content}} className={`main__content main__content--${location}`} />
        {
          location === 'wo' && (
            <div className="main__cities" onClick={(event) => showCitiesBig(event)} onMouseEnter={hideArrow}
            onMouseLeave={(event) => {showArrow(event)}}>
              <h4 className="main__cities__title">{places[placeIndex]}</h4>
              <img className="main__cities__img" src="/city.png" />
            </div>
          )
        }
        {
          location === 'wer' && (
            <div className="main__social" onMouseEnter={hideArrow}
            onMouseLeave={(event) => {showArrow(event)}}
            onClick={(event) => {event.stopPropagation()}} >
              <a target="_blank" href="https://www.instagram.com/storytellingarena/" className="main__social__link main__social__link--insta" />
              <a target="_blank" href="https://twitter.com/StorytellArena" className="main__social__link main__social__link--twitter" />
              <a target="_blank" href="https://www.facebook.com/StorytellingBerlin/" className="main__social__link main__social__link--facebook" />
            </div>
          )
        }
        {
          location === 'premiere' && (
            <div className="main__cities">
            {
              cities.map((city) => (
                <a className="main__city"
                  onMouseEnter={hideArrow}
                  onMouseLeave={(event) => {showArrow(event)}}
                  onClick={(event) => {event.stopPropagation()}}
                  href="mailto:event@storyfelder.de"
                >
                  <div className="city__register"
                  >{register[lang]}</div>
                  <p className="city__info">{city.city} — <span dangerouslySetInnerHTML={{__html: city.dates[lang]}}></span></p>
                </a>
              ))
            }
            </div>
          )
        }
      </section>
    // </Link>
  );
};

// == Export
export default MainText;
