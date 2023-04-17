import React from 'react'
import './portfolio.css'
import { FaMedapps } from 'react-icons/fa'
import IMG1 from '../../assets/portfolio-1.jpg'
import IMG2 from '../../assets/portfolio-2.jpg'
import IMG3 from '../../assets/portfolio-3.jpg'
import IMG4 from '../../assets/portfolio-4.jpg'
import IMG5 from '../../assets/portfolio-5.jpg'
import IMG6 from '../../assets/portfolio-6.jpg'
import IMG7 from '../../assets/portfolio-7.jpg'
import IMG8 from '../../assets/portfolio-8.jpg'
import IMG9 from '../../assets/portfolio-9.jpg'
import IMG10 from '../../assets/portfolio-10.jpg'
import IMG11 from '../../assets/portfolio-11.jpg'
import IMG12 from '../../assets/noProject.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Random Quote Machine',
    description: 'HTML5 | JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/a-Random-Quote-Machine',
    demo: 'https://sarah-rz.github.io/a-Random-Quote-Machine/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'JavaScript Calculator',
    description: 'HTML5 | JavaScript ES6 | CSS3',
    github: 'https://github.com/Sarah-Rz/Calculator',
    demo: 'https://sarah-rz.github.io/Calculator/'
  },
  {
    id: 3,
    image: IMG3,
    title: '25 + 5 Clock',
    description: 'React.js | Materialize | CSS3',
    github: 'https://github.com/Sarah-Rz/25-5-Clock',
    demo: 'https://sarah-rz.github.io/25-5-Clock/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Markdown Previewer',
    description: 'HTML5 | JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/Markdown-Preview',
    demo: 'https://sarah-rz.github.io/Markdown-Preview/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'To DO List',
    description: 'HTML5 | JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/To-Do-List',
    demo: 'https://sarah-rz.github.io/To-Do-List/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Music Player',
    description: 'HTML5 | JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/Music-Player',
    demo: 'https://sarah-rz.github.io/Music-Player/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'JS Documentation',
    description: 'HTML5 | CSS3',
    github: 'https://github.com/Sarah-Rz/JS-Documentation',
    demo: 'https://sarah-rz.github.io/JS-Documentation/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Product Landing Page',
    description: 'HTML5 | CSS3',
    github: 'https://github.com/Sarah-Rz/Responsive-Product-Landing-Page',
    demo: 'https://sarah-rz.github.io/Responsive-Product-Landing-Page/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Survey Form',
    description: 'HTML5 | CSS3',
    github: 'https://github.com/Sarah-Rz/Survey-Form',
    demo: 'https://sarah-rz.github.io/Survey-Form/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Blackjack Game',
    description: 'JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/Blackjack-Game/tree/master',
    demo: 'https://sarah-rz.github.io/Blackjack-Game/'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Chrome Extension | WebTracker',
    description: 'JavaScript ES6 | Bootstrap',
    github: 'https://github.com/Sarah-Rz/Chrome-Extension-Web-Tracker',
    demo: ''

  },
  {
    id: 12,
    image: IMG12,
    title: 'No Project Yet',
    description: '---',
    github: '',
    demo: ''

  },
  

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Einige meiner aktuellen Projekte</h5>
      <h2>Portfolio <FaMedapps/></h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo})=> {
            return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <div className="portfolio__item-cta">
            <a href={github} className="btn btn-primary" target="_blank">GitHub</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>)
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio