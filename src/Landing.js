import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Landing() {
  return (
    <div className='title'>
      <div className='title-left'>
        <h1 className='text-focus-in'>Mirosław <span>Pajor</span></h1>
        <h2 className='tracking-in-expand'>JavaScript Developer</h2>
        <div className='menu'>
          <Link to="about" smooth='easeInOutCubic' duration={500}>About</Link>
          <Link to="projects" smooth='easeInOutCubic' duration={500}>Projects</Link>
          <Link to="contact" smooth='easeInOutCubic' duration={500}>Contact</Link>
        </div>
        <div className='social-links'>
          <a href='https://www.linkedin.com/in/miroslaw-pajor/' target='_blank'>
            <i class="fab fa-linkedin" id="para1"></i>
          </a>
          <a href='https://github.com/strangebedfellow/' target='_blank'>
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className='title-right'>
        <img src='m1.jpg'></img>
      </div>
    </div>
  );
}

export default Landing;