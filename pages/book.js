import Link from 'next/link'
import { useEffect } from 'react';

const Book = ({lang}) => {

  const bookText = {
      en: 'Our book will be available soon for free!',
      de: 'Unser Buch wird in Kürze kostenlos erhältlich sein!',
      ar: 'كتابنا سيكون متاحا قريبا مجانا'
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
      <p className="book__soon">{bookText[lang]}</p>
      <Link className="book__back" href="/home/was">{backText[lang]}</Link>
    </div>
  )
}

export default Book
