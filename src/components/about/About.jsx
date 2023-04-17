import React from "react";
import "./about.css";
import Me from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Erfahren Sie mehr</h5>
      <h2>Über mich</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Erfahrung</h5>
              <small>HTML | CSS | Responsive Web-design: Bootstrap, Materialize, Chakra UI | JS ES6 | React | Jinja | Arbeit mit API & Server</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projekte</h5>
              <small>Selbstprojekte: 
                <br />
                Portfolio Website | E-commerce App
              </small>
              <br />
              <small>
                Firmenprojekte: 
                <br />
                Klinik Website
              </small>
            </article>
          </div>
          <div className="about__story">
          <p>
          Hallo, mein Name ist Sara. Ich interessire mich für Frontend Web Entwicklung. 
          Im Januar 2022 habe ich zuerst mit Scrimba und dann mit FreeCodeCamp (interaktive Lern-Web-Plattform) angefangen zu programmieren. 
          Ich habe einen langen Weg zurückgelegt, um endlich meinen Traumjob zu finden.
          Hier ist meine Geschichte, wie ich eine Entwicklerin wurde!
              <br />
            </p>
          </div>
        </div>
      </div>
      
      <div className="about__story-part-2">    
        <p>
        Zunächst habe ich an der medizinischen Universität Genetik studiert. 
        Als Kind war ich immer neugierig auf Details und darauf, wie winzig kleine Dinge große Auswirkungen haben können. 
        Ich dachte, die Genetik sei ein Gebiet, auf dem ich außerordentliche Dinge tun könnte.
        Aber ich habe mich geirrt. Meine Vorstellungen von der Genetik waren ganz anders als das, was an der Universität gelehrt wurde. 
        Nach meinem Abschluss begann ich, eine neue Sprache zu lernen. Deutsch.
        Da ich mich für diese Sprache interessierte, beschloss ich, als deutsche Übersetzerin in einer Firma zu arbeiten. 
        Dort habe ich rund um die Uhr an Computer gearbeitet und es hat mir Spaß gemacht. 
        Der Mangel an Herausforderungen war für mich jedoch lästig. 
        Zu dieser Zeit hatte ich eine Mitbewohnerin, die im Bereich SEO arbeitete. 
        Sie redete immer begeistert von ihrem Beruf, ihren Projekten und dem tollen Team, mit dem sie arbeitete. 
        Klingt toll, oder? Das war der Wendepunkt in meinem Leben. 
        Ich begann, nach allen möglichen IT-Jobs zu suchen, und schließlich fand ich es. 
        Als ich meinen ersten Code "Hello World" schrieb, öffnete sich eine neue Welt für mich!
        Und meine Expedition in dieser wunderbaren Welt begann. Ich habe mit Scrimba grundlegende HTML, CSS und JavaScript gelernt. 
        Danach habe ich Frontend Kurse bei Free Code Camp belegt und einige Projekte mit JS Frameworks wie React und modernen responsiven CSS Frameworks wie Materialize, Bootstrap und Chakra UI erstellt.
        Nach 11 Monaten konnte ich meine erste Stelle als Praktikantin für Frontend Entwicklung bei einer digital-Marketing-Firma antreten!
        Wir waren einen Startup-Team von 12 Personen, darunter Grafikdesigner, Softwareexperten, UI/UX-Designer, Backend- und Frontend-Programmierer, die nach der Scrum- Methode arbeiteten.
        Zu meinen Aufgaben gehörte es:
        Dynamisierung der Webseite (für die Klinik) mit Jinja (Logik), erstellt die Seite (Register/Login, Blogs, Profile, 
        Onlinereservierung, Galerie,...), lösung der Probleme, Arbeit mit CSS, Bootstrap, Fancybox,..., Anwendung von Lozad und SEO, Arbeit mit API, WinSCP, wenige Erfahrung mit Javascript für einige Teil, uzw.
        Und jetzt will ich eine Ausbildung als Anwendungsentwicklerin in Deutschland machen!
        Begleiten Sie mich auf dieser wunderbaren Expedition!...
        </p>
      </div>
    </section>
  );
};

export default About;
