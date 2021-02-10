module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TPEg");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "TPEg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Imspanssum = ({
  content
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("article", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      class: "container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "Impressum"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Angaben gem\xE4\xDF \xA7 5 TMG"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Daniela Gottschalk,"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Heilpraktikerin Psychotherapie,"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Wei\xDFadlergasse 3, 60311 Frankfurt am Main"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
        id: "kontakt",
        children: "Kontakt"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Mobil: +4915161556057"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "E-Mail: therapy@gottschalk-family.com"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
        id: "umsatzsteuer",
        children: "Umsatzsteuer"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Umsatzsteuer-Identifikationsnummer gem\xE4\xDF \xA727a Umsatzsteuergesetz: F\xFCr Psychotherapeuten und Heilpraktiker Psychotherapie gibt es keine Umsatzsteuerpflicht. Berufsbezeichnung und berufsrechtliche Regelungen Beh\xF6rdliche Zulassung/Ausstellende Beh\xF6rde ( 1 HPG) durch:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Ordnungsamt Frankfurt am Main, Kleyerstr. 86, 60326 Frankfurt am Main Mit der gesetzlichen Berufsbezeichnung in Deutschland:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Heilpraktikerin f\xFCr Psychotherapie (HPG-P) Tag der Amts\xE4rztlichen Zulassung:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "01.06.2010 Aufsichtsbeh\xF6rde (Heilpraktiker Psychotherapie):"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Gesundheitsamt Frankfurt, Breite Gasse 28, 60313 Frankfurt am Main Angaben zur Berufshaftpflichtversicherung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Name und Sitz des Versicherers: Continentale Sachversicherung AG"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "44139 Dortmund Streitschlichtung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Haftung f\xFCr Inhalte"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Als Diensteanbieter bin ich gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsspanchenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Haftung f\xFCr Links"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Unser Angebot enth\xE4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Urheberrecht"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsspanchenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Quelle des Imspanssums: eRecht24 Webdesign"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Kai Grudde www.grudde.net"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
        id: "datenschutzerkl\xE4rung",
        children: "Datenschutzerkl\xE4rung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Daniela Gottschalk Heilpraktikerin Psychotherapie Wei\xDFadlergasse 3, 60311 Frankfurt am Main Mobil +4915161556057 E-Mail: therapy@gottschalk-family.com Website: www.gottschalk-family.com"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Ich freue mich sehr \xFCber Ihr Interesse an meiner Praxis. Datenschutz hat einen besonders hohen Stellenwert f\xFCr die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch \u2013 Heilpraktikerin Psychotherapie. Eine Nutzung der Internetseiten der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch \u2013 Heilpraktikerin Psychotherapie ist grunds\xE4tzlich ohne jede Angabe personenbezogener Daten m\xF6glich. Sofern eine betroffene Person besondere Services meiner Praxis \xFCber meine Internetseite in Anspruch nehmen m\xF6chte, k\xF6nnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht f\xFCr eine solche Verarbeitung keine gesetzliche Grundlage, hole ich generell eine Einwilligung der betroffenen Person ein."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in \xDCbereinstimmung mit den f\xFCr die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch \u2013 Heilpraktikerin Psychotherapie geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerkl\xE4rung m\xF6chte meine Praxis die \xD6ffentlichkeit \xFCber Art, Umfang und Zweck der von mir erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerkl\xE4rung \xFCber die ihnen zustehenden Rechte aufgekl\xE4rt. Die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch \u2013 Heilpraktikerin Psychotherapie hat als f\xFCr die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Ma\xDFnahmen umgesetzt, um einen m\xF6glichst l\xFCckenlosen Schutz der \xFCber diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch k\xF6nnen Internetbasierte Daten\xFCbertragungen grunds\xE4tzlich Sicherheitsl\xFCcken aufweisen, sodass ein absoluter Schutz nicht gew\xE4hrleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an mich zu \xFCbermitteln."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ol", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Begriffsbestimmungen"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Die Datenschutzerkl\xE4rung der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch \u2013 Heilpraktikerin Psychotherapie beruht auf den Begrifflichkeiten, die durch den Europ\xE4ischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Meine Datenschutzerkl\xE4rung soll sowohl f\xFCr die \xD6ffentlichkeit als auch f\xFCr meine Klienten und Gesch\xE4ftspartner einfach lesbar und verst\xE4ndlich sein. Um dies zu gew\xE4hrleisten, m\xF6chte ich vorab die verwendeten Begrifflichkeiten erl\xE4utern. Ich verwende in dieser Datenschutzerkl\xE4rung unter anderem die folgenden Begriffe:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "a.    personenbezogene Daten"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person (im Folgenden \u201Ebetroffene Person\u201C) beziehen. Als identifizierbar wird eine nat\xFCrliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identit\xE4t dieser nat\xFCrlichen Person sind, identifiziert werden kann."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "b.    betroffene Person"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Betroffene Person ist jede identifizierte oder identifizierbare nat\xFCrliche Person, deren personenbezogene Daten von dem f\xFCr die Verarbeitung Verantwortlichen verarbeitet werden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "c.     Verarbeitung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgef\xFChrte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Ver\xE4nderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch \xDCbermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verkn\xFCpfung, die Einschr\xE4nkung, das L\xF6schen oder die Vernichtung."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "d.    Einschr\xE4nkung der Verarbeitung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Einschr\xE4nkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre k\xFCnftige Verarbeitung einzuschr\xE4nken."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "e.    Profiling"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte pers\xF6nliche Aspekte, die sich auf eine nat\xFCrliche Person beziehen, zu bewerten, insbesondere, um Aspekte bez\xFCglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, pers\xF6nlicher Vorlieben, Interessen, Zuverl\xE4ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser nat\xFCrlichen Person zu analysieren oder vorherzusagen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "f.      Pseudonymisierung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zus\xE4tzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden k\xF6nnen, sofern diese zus\xE4tzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Ma\xDFnahmen unterliegen, die gew\xE4hrleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren nat\xFCrlichen Person zugewiesen werden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "g.    Verantwortlicher oder f\xFCr die Verarbeitung Verantwortlicher"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Verantwortlicher oder f\xFCr die Verarbeitung Verantwortlicher ist die nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise k\xF6nnen die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "h.    Auftragsverarbeiter"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Auftragsverarbeiter ist eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "i.      Empf\xE4nger"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Empf\xE4nger ist eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabh\xE4ngig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Beh\xF6rden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten m\xF6glicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empf\xE4nger."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "j.      Dritter"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Dritter ist eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle au\xDFer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "k.    Einwilligung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Einwilligung ist jede von der betroffenen Person freiwillig f\xFCr den bestimmten Fall in informierter Weise und unmissverst\xE4ndlich abgegebene Willensbekundung in Form einer Erkl\xE4rung oder einer sonstigen eindeutigen best\xE4tigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ol", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Name und Anschrift des f\xFCr die Verarbeitung Verantwortlichen"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europ\xE4ischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Name und Anschrift des Datenschutzbeauftragten"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Der Datenschutzbeauftragte des f\xFCr die Verarbeitung Verantwortlichen ist:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Praxis K\xF6rpertherapie Frankfurt Sandra Koch Heilpraktikerin Psychotherapie Auf der K\xF6rnerwiese 8, 60322 Frankfurt am Main Mobil 0157-54748838 E-Mail: kontakt@koerpertherapiefrankfurt.de Website: www.koerpertherapiefrankfurt.de"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede betroffene Person kann sich jederzeit bei allen Fragen und Anregungen zum Datenschutz direkt an unseren Datenschutzbeauftragten wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Erfassung von allgemeinen Daten und Informationen"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Die Internetseite der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden k\xF6nnen die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche \xFCber ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige \xE4hnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie keine R\xFCckschl\xFCsse auf die betroffene Person. Diese Informationen werden vielmehr ben\xF6tigt, um (1) die Inhalte meiner Internetseite korrekt auszuliefern, (2) die Inhalte meiner Internetseite sowie die Werbung f\xFCr diese zu optimieren, (3) die dauerhafte Funktionsf\xE4higkeit meiner informationstechnologischen Systeme und der Technik meiner Internetseite zu gew\xE4hrleisten sowie (4) um Strafverfolgungsbeh\xF6rden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die Psychologische Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in meiner Praxis zu erh\xF6hen, um letztlich ein optimales Schutzniveau f\xFCr die von mir verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Routinem\xE4\xDFige L\xF6schung und Sperrung von personenbezogenen Daten"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Der f\xFCr die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur f\xFCr den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europ\xE4ischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der f\xFCr die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Entf\xE4llt der Speicherungszweck oder l\xE4uft eine vom Europ\xE4ischen Richtlinien- und Verordnungsgeber oder einem anderen zust\xE4ndigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinem\xE4\xDFig und entsspanchend den gesetzlichen Vorschriften gesperrt oder gel\xF6scht."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Rechte der betroffenen Person Recht auf Best\xE4tigung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber einger\xE4umte Recht, von dem f\xFCr die Verarbeitung Verantwortlichen eine Best\xE4tigung dar\xFCber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. M\xF6chte eine betroffene Person dieses Best\xE4tigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\xFCr die Verarbeitung Verantwortlichen wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Auskunft"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, jederzeit von dem f\xFCr die Verarbeitung Verantwortlichen unentgeltliche Auskunft \xFCber die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europ\xE4ische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft \xFCber folgende Informationen zugestanden:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "        die Verarbeitungszwecke die Kategorien personenbezogener Daten, die verarbeitet werden die Empf\xE4nger oder Kategorien von Empf\xE4ngern, gegen\xFCber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empf\xE4ngern in Drittl\xE4ndern oder bei internationalen Organisationen falls m\xF6glich die geplante Dauer, f\xFCr die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht m\xF6glich ist, die Kriterien f\xFCr die Festlegung dieser Dauer das Bestehen eines Rechts auf Berichtigung oder L\xF6schung der sie betreffenden personenbezogenen Daten oder auf Einschr\xE4nkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh\xF6rde wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verf\xFCgbaren Informationen \xFCber die Herkunft der Daten das Bestehen einer automatisierten Entscheidungsfindung einschlie\xDFlich Profiling gem\xE4\xDF Artikel 22 Abs.1 und 4 DS-GVO und \u2014 zumindest in diesen F\xE4llen \u2014 aussagekr\xE4ftige Informationen \xFCber die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung f\xFCr die betroffene Person"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Ferner steht der betroffenen Person ein Auskunftsrecht dar\xFCber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation \xFCbermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im \xDCbrigen das Recht zu, Auskunft \xFCber die geeigneten Garantien im Zusammenhang mit der \xDCbermittlung zu erhalten. M\xF6chte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\xFCr die Verarbeitung Verantwortlichen wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Berichtigung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, die unverz\xFCgliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Ber\xFCcksichtigung der Zwecke der Verarbeitung, die Vervollst\xE4ndigung unvollst\xE4ndiger personenbezogener Daten \u2014 auch mittels einer erg\xE4nzenden Erkl\xE4rung \u2014 zu verlangen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "M\xF6chte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\xFCr die Verarbeitung Verantwortlichen wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf L\xF6schung (Recht auf Vergessen werden)"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverz\xFCglich gel\xF6scht werden, sofern einer der folgenden Gr\xFCnde zutrifft und soweit die Verarbeitung nicht erforderlich ist:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "        Die personenbezogenen Daten wurden f\xFCr solche Zwecke erhoben oder auf sonstige Weise verarbeitet, f\xFCr welche sie nicht mehr notwendig sind. Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gem\xE4\xDF Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO st\xFCtzte, und es fehlt an einer anderweitigen Rechtsgrundlage f\xFCr die Verarbeitung. Die betroffene Person legt gem\xE4\xDF Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gr\xFCnde f\xFCr die Verarbeitung vor, oder die betroffene Person legt gem\xE4\xDF Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein. Die personenbezogenen Daten wurden unrechtm\xE4\xDFig verarbeitet. Die L\xF6schung der personenbezogenen Daten ist zur Erf\xFCllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt. Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gem\xE4\xDF Art. 8 Abs. 1 DS-GVO erhoben."
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Sofern einer der oben genannten Gr\xFCnde zutrifft und eine betroffene Person die L\xF6schung von personenbezogenen Daten, die bei der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie gespeichert sind, veranlassen m\xF6chte, kann sie sich hierzu jederzeit an die Person des f\xFCr die Verarbeitung Verantwortlichen wenden. Die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wird veranlassen, dass dem L\xF6schverlangen unverz\xFCglich nachgekommen wird. Wurden die personenbezogenen Daten von der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie \xF6ffentlich gemacht und ist meine Praxis als Verantwortlicher gem\xE4\xDF Art. 17 Abs. 1 DS-GVO zur L\xF6schung der personenbezogenen Daten verpflichtet, so trifft die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie unter Ber\xFCcksichtigung der verf\xFCgbaren Technologie und der Implementierungskosten angemessene Ma\xDFnahmen, auch technischer Art, um andere f\xFCr die Datenverarbeitung Verantwortliche, welche die ver\xF6ffentlichten personenbezogenen Daten verarbeiten, dar\xFCber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen f\xFCr die Datenverarbeitung Verantwortlichen die L\xF6schung s\xE4mtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wird im Einzelfall das Notwendige veranlassen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Einschr\xE4nkung der Verarbeitung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Sofern einer der oben genannten Gr\xFCnde zutrifft und eine betroffene Person die L\xF6schung von personenbezogenen Daten, die bei der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie gespeichert sind, veranlassen m\xF6chte, kann sie sich hierzu jederzeit an eine Person des f\xFCr die Verarbeitung Verantwortlichen wenden. Diese Person der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wird veranlassen, dass dem L\xF6schverlangen unverz\xFCglich nachgekommen wird. Wurden die personenbezogenen Daten von der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie \xF6ffentlich gemacht und ist meine Praxis als Verantwortlicher gem\xE4\xDF Art. 17 Abs. 1 DS-GVO zur L\xF6schung der personenbezogenen Daten verpflichtet, so trifft die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie unter Ber\xFCcksichtigung der verf\xFCgbaren Technologie und der Implementierungskosten angemessene Ma\xDFnahmen, auch technischer Art, um andere f\xFCr die Datenverarbeitung Verantwortliche, welche die ver\xF6ffentlichten personenbezogenen Daten verarbeiten, dar\xFCber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen f\xFCr die Datenverarbeitung Verantwortlichen die L\xF6schung s\xE4mtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Die Person der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wird im Einzelfall das Notwendige veranlassen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "        Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar f\xFCr eine Dauer, die es dem Verantwortlichen erm\xF6glicht, die Richtigkeit der personenbezogenen Daten zu \xFCberpr\xFCfen. Die Verarbeitung ist unrechtm\xE4\xDFig, die betroffene Person lehnt die L\xF6schung der personenbezogenen Daten ab und verlangt stattdessen die Einschr\xE4nkung der Nutzung der personenbezogenen Daten. Der Verantwortliche ben\xF6tigt die personenbezogenen Daten f\xFCr die Zwecke der Verarbeitung nicht l\xE4nger, die betroffene Person ben\xF6tigt sie jedoch zur Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen. Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gr\xFCnde des Verantwortlichen gegen\xFCber denen der betroffenen Person \xFCberwiegen."
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschr\xE4nkung von personenbezogenen Daten, die bei der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie gespeichert sind, verlangen m\xF6chte, kann sie sich hierzu jederzeit an eine Person des f\xFCr die Verarbeitung Verantwortlichen wenden. Die Person der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wird die Einschr\xE4nkung der Verarbeitung veranlassen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Daten\xFCbertragbarkeit"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, g\xE4ngigen und maschinenlesbaren Format zu erhalten. Sie hat au\xDFerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu \xFCbermitteln, sofern die Verarbeitung auf der Einwilligung gem\xE4\xDF Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gem\xE4\xDF Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht f\xFCr die Wahrnehmung einer Aufgabe erforderlich ist, die im \xF6ffentlichen Interesse liegt oder in Aus\xFCbung \xF6ffentlicher Gewalt erfolgt, welche dem Verantwortlichen \xFCbertragen wurde."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Ferner hat die betroffene Person bei der Aus\xFCbung ihres Rechts auf Daten\xFCbertragbarkeit gem\xE4\xDF Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen \xFCbermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeintr\xE4chtigt werden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Zur Geltendmachung des Rechts auf Daten\xFCbertragbarkeit kann sich die betroffene Person jederzeit an eine Person der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Widerspruch"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, aus Gr\xFCnden, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch f\xFCr ein auf diese Bestimmungen gest\xFCtztes Profiling."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir k\xF6nnen zwingende schutzw\xFCrdige Gr\xFCnde f\xFCr die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person \xFCberwiegen, oder die Verarbeitung dient der Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Verarbeitet die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch f\xFCr das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegen\xFCber der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie der Verarbeitung f\xFCr Zwecke der Direktwerbung, so wird die die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie personenbezogenen Daten nicht mehr f\xFCr diese Zwecke verarbeiten."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Zudem hat die betroffene Person das Recht, aus Gr\xFCnden, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gem\xE4\xDF Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erf\xFCllung einer im \xF6ffentlichen Interesse liegenden Aufgabe erforderlich."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Zur Aus\xFCbung des Rechts auf Widerspruch kann sich die betroffene Person direkt jeden Mitarbeiter der Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszu\xFCben, bei denen technische Spezifikationen verwendet werden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Automatisierte Entscheidungen im Einzelfall einschlie\xDFlich Profiling"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, nicht einer ausschlie\xDFlich auf einer automatisierten Verarbeitung \u2014 einschlie\xDFlich Profiling \u2014 beruhenden Entscheidung unterworfen zu werden, die ihr gegen\xFCber rechtliche Wirkung entfaltet oder sie in \xE4hnlicher Weise erheblich beeintr\xE4chtigt, sofern die Entscheidung (1) nicht f\xFCr den Abschluss oder die Erf\xFCllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zul\xE4ssig ist und diese Rechtsvorschriften angemessene Ma\xDFnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdr\xFCcklicher Einwilligung der betroffenen Person erfolgt."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Ist die Entscheidung (1) f\xFCr den Abschluss oder die Erf\xFCllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdr\xFCcklicher Einwilligung der betroffenen Person, trifft die Praxis K\xF6rpertherapie Frankfurt \u2013 Sandra Koch- Heilpraktikerin Psychotherapie angemessene Ma\xDFnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung geh\xF6rt."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "M\xF6chte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\xFCr die Verarbeitung Verantwortlichen wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "    Recht auf Widerruf einer datenschutzrechtlichen Einwilligung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "M\xF6chte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des f\xFCr die Verarbeitung Verantwortlichen wenden."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Rechtsgrundlage der Verarbeitung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Art. 6 I lit. a DS-GVO dient meiner Praxis als Rechtsgrundlage f\xFCr Verarbeitungsvorg\xE4nge, bei denen wir eine Einwilligung f\xFCr einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erf\xFCllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorg\xE4ngen der Fall ist, die f\xFCr eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt f\xFCr solche Verarbeitungsvorg\xE4nge die zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich sind, etwa in F\xE4llen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unsere Praxis einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erf\xFCllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen F\xE4llen k\xF6nnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen nat\xFCrlichen Person zu sch\xFCtzen. Dies w\xE4re beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden w\xFCrde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden m\xFCssten. Dann w\xFCrde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich k\xF6nnten Verarbeitungsvorg\xE4nge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorg\xE4nge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unserer Praxis oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht \xFCberwiegen. Solche Verarbeitungsvorg\xE4nge sind uns insbesondere deshalb gestattet, weil sie durch den Europ\xE4ischen Gesetzgeber besonders erw\xE4hnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein k\xF6nnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erw\xE4gungsgrund 47 Satz 2 DS-GVO)."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchf\xFChrung unserer Gesch\xE4ftst\xE4tigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Dauer, f\xFCr die die personenbezogenen Daten gespeichert werden"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Das Kriterium f\xFCr die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsspanchenden Daten routinem\xE4\xDFig gel\xF6scht, sofern sie nicht mehr zur Vertragserf\xFCllung oder Vertragsanbahnung erforderlich sind."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit f\xFCr den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; m\xF6gliche Folgen der Nichtbereitstellung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Wir kl\xE4ren Sie dar\xFCber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verf\xFCgung stellt, die in der Folge durch uns verarbeitet werden m\xFCssen. Die betroffene Person ist beispielsweise verpflichtet mir personenbezogene Daten bereitzustellen, wenn meine Praxis mit ihr einen Vertrag abschlie\xDFt. Eine Nichtbereitstellung der personenbezogenen Daten h\xE4tte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden k\xF6nnte. Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an mich Sandra Koch wenden. Sandra Koch kl\xE4rt den Betroffenen einzelfallbezogen dar\xFCber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder f\xFCr den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten h\xE4tte."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        class: "language-plaintext highlighter-rouge",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          class: "highlight",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            class: "highlight",
            children: "Bestehen einer automatisierten Entscheidungsfindung"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Als verantwortungsbewusste Praxis verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling. Diese Datenschutzerkl\xE4rung wurde durch den Datenschutzerkl\xE4rungs-Generator der DGD Deutsche Gesellschaft f\xFCr Datenschutz GmbH, die als Externer Datenschutzbeauftragter W\xFCrzburg t\xE4tig ist, in Kooperation mit dem IT- und Datenschutzrecht Anwalt Christian Solmecke erstellt."
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Imspanssum);

/***/ })

/******/ });