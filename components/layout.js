import React, { useEffect, useState } from 'react';

import Header from './Header';
import Languages from './Languages';
import Menu from './Menu';
import { getHome } from '../lib/api'
import content from '../data';

export default function Layout ({ children, setLang, lang, impressum}) {

    // const impressumText = fetchedContent.Impressum;

    return (
        <div className="container">


            <Header headerSections={content[lang].header} lang={lang}/>
            <Languages setLang={setLang} currentLang={lang}/>
            <Menu headerSections={content[lang].header} setLang={setLang} lang={lang} impressum={impressum}/>
            {children}
        </div>
    )
}

// export default Layout
