import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1 className='text-focus-in'>Mirosław <span>Pajor</span></h1>
        <h2 className='tracking-in-expand'>JavaScript Developer</h2>
      </div>
      <div className='content'>
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
