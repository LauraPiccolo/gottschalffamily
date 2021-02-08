import React, { useEffect, useState } from 'react';

import Header from './Header';
import Languages from './Languages';
import Menu from './Menu';
import content from '../data';
import Cookiebar from './utils/cookiebar.js'
import Cookies from 'js-cookie'

export default function Layout ({ children, setLang, lang, impressum}) {

    useEffect(() => {
        if(Cookies.get('lang') !== undefined) {
            const cookieLang = Cookies.get('lang');

            setLang(cookieLang);
        }
    },[]);

    return (
        <div className="container">
            <Cookiebar lang={lang}/>
            <Header headerSections={content[lang].header} lang={lang}/>
            <Languages setLang={setLang} currentLang={lang}/>
            <Menu headerSections={content[lang].header} setLang={setLang} lang={lang} impressum={impressum}/>
            {children}
        </div>
    )
}

// export default Layout
