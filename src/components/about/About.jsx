import React from "react";
import "./about.css";
import Me from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>JavaScript | React</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <div className="about__story">
          <p>
              Hi, My name is Sara. I'm interested in Front-End development. 
              I started Coding in January 2022 with Scrimba and then with Free Code Camp.
              <br />
              Here is my Story of how I became a Developer!
            </p>
          </div>
        </div>
      </div>
      <div className="about__story-part-2">
        <p>
          First of all, I went to medical University to study Genetics. 
          As a kid, I was always curious about Details and how tiny little Things can have big Effects. 
          I thought Genetics was a field where I could do extraordinary Things.
          <br />
          <b>But</b> I was wrong. My Ideas about Genetics were very different from what was taught at 
          University. After I graduated, I started learning a new Language. German. Because of my interest
          in this Language, I decided to work as a Translator in a translation Agency for a while. 
          There I worked for hours on the Computer, and I enjoyed it. However, the lack of Challenges
          bothered me a little, and sometimes it got boring. At that time, I had a Roommate who worked
          in field of SEO. She would always talk excitedly about her Work, her Projects, and the cool Team she was
          working with. Sounds awesome, right? That was the turning point in my Life. I started looking for
          all kinds of IT Jobs and eventually found it. When I wrote my first Code "Hello World", a new
          World opened up for me! And my Journey into this wonderful World began. I learned basic <b>HTML</b>
          , <b>CSS</b>, and <b>JavaScript</b> with <b>Scrimba</b>. After that, I took <b>Front-End</b> Courses
          at <b>Free Code Camp</b> and built some Projects
          with JS Frameworks like <b>React</b> and modern responsive CSS
          Frameworks like <b>Materialize</b> and <b>Bootstrap</b>. Now I'm
          learning more and more every Day.
          <br />I'm looking to collaborate with a great Team!
        </p>
      </div>
    </section>
  );
};

export default About;
