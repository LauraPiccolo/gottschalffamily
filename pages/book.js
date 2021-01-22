import Link from 'next/link'
import { useEffect } from 'react';

const Book = ({lang}) => {

  const bookText = {
      en: 'Our book will be<br/>available soon for free!',
      de: 'Unser Buch wird in Kürze<br/>kostenlos erhältlich sein!',
      ar: 'كتابنا سيكون متاحا<br/> قريبا مجانا'
  }

  const backText = {
    en: 'Back to Home page',
    de: 'Zurück zur Startseite',
    ar: 'العودة إلى الصفحة الرئيسية'
  }

  useEffect(() => {
    document.querySelector('.menu').classList.remove('menu--open');
  })
    
  return (
    <div className="book">
      <p className="book__soon" dangerouslySetInnerHTML={{__html: bookText[lang]}}/>
      <Link className="book__back" href="/home/was">{backText[lang]}</Link>
    </div>
  )
}

export default Book
