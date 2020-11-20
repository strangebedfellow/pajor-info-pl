import React from 'react';
import ReactSwipe from 'react-swipe';

function Projects() {
  let reactSwipeEl;
  return <>
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <div className='swipe'>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className='p1'>
            <h1>PHYSIOTHERAPY PATIENTS MANAGER</h1>
            <img src='physio.jpg'></img>
            <span className='project-src'>
              <a href='https://github.com/strangebedfellow/physiotherapy-patients-manager' target='_blank'>
                <p><i class="fab fa-github"></i> Source</p>
              </a>
              <a href='http://pajor.info.pl/physio' target='_blank'>
                <p><i class="far fa-play-circle"></i> Demo</p>
              </a>
            </span>
          </div>
          <div className='p1'>
            <h1>NASA API</h1>
            <img src='nasa.jpg'></img>
            <span className='project-src'>
              <a href='https://github.com/strangebedfellow/nasa_api_project' target='_blank'>
                <p><i class="fab fa-github"></i> Source</p>
              </a>
              <a href='http://pajor.info.pl/apod' target='_blank'>
                <p><i class="far fa-play-circle"></i> Demo</p>
              </a>
            </span>
          </div>
          <div className='p1'>
            <h1>HOME BREWER CALCULATOR</h1>
            <img src='hbc.jpg'></img>
            <span className='project-src'>
              <a href='https://github.com/strangebedfellow/home-brewer-calc' target='_blank'>
                <p><i class="fab fa-github"></i> Source</p>
              </a>
              <a href='http://pajor.info.pl/hbc' target='_blank'>
                <p><i class="far fa-play-circle"></i> Demo</p>
              </a>
            </span>
          </div>
        </ReactSwipe>
        <div className='swipe-nav'>
          <button onClick={() => reactSwipeEl.prev()}><i class="fas fa-chevron-left"></i></button>
          <button onClick={() => reactSwipeEl.next()}><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </>
}

export default Projects;