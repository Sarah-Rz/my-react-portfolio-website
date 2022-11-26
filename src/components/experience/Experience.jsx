import React from "react";
import "./experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import {DiSass} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {DiMaterializecss} from "react-icons/di";
import {IoLogoNodejs} from "react-icons/io";



const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content-frontend">
          <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
              <small className="text-light">
                ES6
                <br />
                Regular Expressions
                <br />
                Debugging
                <br />
                Basic Data Structures
                <br />
                Object Oriented Programming
                <br />
                Functional Programming
                <br />
              </small>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <h4>React</h4>
              <small className="text-light">
               JSX
              </small>
              <br />
              <small className="text-light">
               State, Props
              </small>
              <br />
              <small className="text-light">
               Babel
              </small>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <DiJqueryLogo className="experience__details-icon" />
              <h4>jQuery</h4>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icon" />
              <h4>SASS</h4>
              <small className="text-light">
               mixin
              </small>
              <br />
              <small className="text-light">
               inculde
              </small>
              <br />
              <small className="text-light">
               extend
              </small>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <DiMaterializecss className="experience__details-icon" />
              <h4>Materialize</h4>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
              <small className="text-light">
                Responsive Web Design <br /> CSS Animation <br /> CSS Transform
              </small>
            </article>
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <h4>Git</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
