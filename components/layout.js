import React, { useState } from 'react';

import Header from './Header';
import Languages from './Languages';
// import Sticker from './Sticker';
// FETCH
import content from '../data';

const Language = React.createContext()

const Layout = ({ children, settings }) => {

    const [lang, setLang] = useState('de');
  

    return (
        <div className="container">


            <Header headerSections={content[lang].header}/>
            <Languages setLang={setLang} currentLang={lang}/>
            {children}
        </div>
    )
}
  
export default Layout
