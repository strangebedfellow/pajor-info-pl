import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Carousel from './swipe';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <div className='title-left'>
          <h1 className='text-focus-in'>Mirosław <span>Pajor</span></h1>
          <h2 className='tracking-in-expand'>JavaScript Developer</h2>
          <Link to="contact" smooth='easeInOutCubic' duration={500}>About</Link>
          <Link to="projects" smooth='easeInOutCubic' duration={500}>Projects</Link>
          <Link to="contact" smooth='easeInOutCubic' duration={500}>Contact</Link>
        </div>
        <div className='title-right'>
          <img src='m1.jpg'></img>
        </div>
      </div>
      <div className='projects' id='projects'>
        <Carousel />
      </div>
      <div className='content' id='contact'>
        <span>
          <div className='row scale-in-center'>
            <i class="fas fa-mobile-alt"></i>
            <p>504191282</p>
          </div>
        </span>
        <span>
          <a href='mailto:miroslaw@pajor.info.pl'>
            <div className='row scale-in-center'>
              <i class="fas fa-at"></i>
              <p>miroslaw@pajor.info.pl</p>
            </div>
          </a>
        </span>
        <span>
          <a href='https://www.linkedin.com/in/miroslaw-pajor/' target='_blank'>
            <div className='row scale-in-center'>
              <i class="fab fa-linkedin"></i>
              <p>linkedin.com/in/miroslaw-pajor/</p>
            </div>
          </a>
        </span>
        <span>
          <a href='https://github.com/strangebedfellow/' target='_blank'>
            <div className='row scale-in-center'>
              <i class="fab fa-github"></i>
              <p>github.com/strangebedfellow/</p>
            </div>
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
