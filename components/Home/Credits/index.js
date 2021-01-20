import Link from 'next/link'
import { useState } from 'react';
import { render } from 'storyblok-rich-text-react-renderer';


const Credits= ({ lang, impressum }) => {
  const [impressumOpen, setImpressumOpen] = useState(false);

  const credits = {
      de: {
          impressum: 'Impressum',
          credits: 'Gefördert durch das Bundesministerium des Inneren, für Bau und Heimat (BMI)<br/>sowie das Sonderprogramm Neustart des Fonds Soziokultur.',
          design: 'Website von'
      },
      en: {
        impressum: 'Imprint',
        credits: 'Funded by the Federal Ministry of the Interior, Building and Community (BMI)<br/>as well as through the special programm Neustart of the Fonds Soziokultur.',
        design: 'Website by'
      },
      ar: {
        impressum: 'بصمة',
        credits: 'بتمويل من الوزارة الاتحادية للداخلية والبناء والمجتمع (BMI) وكذلك من خلال البرنامج الخاص Neustart of the Fonds Soziokultur.',
        design: 'الموقع من قبل'
      }
  };

  return (
    <footer className={`home__footer${impressumOpen ? ' home__footer--open':''}`}>
      <div className='home__footer__close' onClick={() => setImpressumOpen(false)}/>
      <div className="home__footer__small">
        <div className="home__footer__logos" style={{display: impressumOpen ? 'none':'block'}}>
          <a href="https://neustartkultur.de/" target="_blank"><img src="/logos/nsk.png"/></a>
          <a href="https://www.bmi.bund.de/DE/startseite/startseite-node.html" target="_blank"><img src="/logos/bmi.png"/></a>
          <a className="home__footer__logos__fs" href="https://www.fonds-soziokultur.de/" target="_blank"><img src="/logos/fs.jpg"/></a>
        </div>
        <p className="home__footer__credits" dangerouslySetInnerHTML={{__html: credits[lang].credits}} />
        <p className="home__footer__links">
          <button className="home__footer__impressum__button" onClick={() => setImpressumOpen(!impressumOpen)}>{credits[lang].impressum}</button>
          <br/>
          <a className="home__footer__design" href="http://piccolora.fr" target="_blank">{credits[lang].design} Laura Piccolo</a>
        </p>
        </div>
        <div className="home__footer__impressum" style={{height: impressumOpen ? 'auto':'0px'}}>
          <button className="home__footer__impressum__close" onClick={() => setImpressumOpen(false)}/>
          <h4>{credits[lang].impressum}</h4>
          <p className="rte">{render(impressum)}</p>
        </div>
    </footer>
  );
};

export default Credits;
