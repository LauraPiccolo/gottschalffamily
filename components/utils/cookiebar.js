import CookieConsent from "react-cookie-consent"
import $ from 'jquery';

const Cookiebar = ({lang}) => {

    let text = {
        en:"We use cookies. ",
        de: "Wir verwenden Cookies. ",
        ar: '"cookies" الموقع يستخدم ملف تعريف الارتباط '
    };
    let info = {
        en:"Learn more",
        de: "Weitere Informationen",
        ar: "اقرأ المزيد"
    };
    let accept = {
        en: "Accept",
        de: "Zulassen",
        ar: "موافق"
    }

    const displayImpressum = () => {
        if(window.innerWidth >= 750) {
            $('.home__footer__impressum__button').click();
        }
        else {
            $('.header__menu').click();
            $('.home__footer__impressum__button').click();
        }
    }

    const removeCookie = () => {
        document.querySelectorAll('.CookieConsent')[0].style.display = 'none';
    }

    return (
        <CookieConsent onAccept={removeCookie} disableStyles="true" buttonText="Accept" cookieName="myAwesomeCookieName2" expires={150}>
                {text[lang]}<a onClick={displayImpressum}>{info[lang]}</a>
        </CookieConsent>
    )
}
  
export default Cookiebar