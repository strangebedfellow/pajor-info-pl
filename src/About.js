import React from 'react';

function About() {
  return (
    <div className='about' id='about'>
      <h2>About me</h2>
      <div className='about-content'>
        <p> Posiadam kilkunastoletnie doświadczenie w branży
        technologii internetowych oraz w pracy z klientem. Od
        kilku lat pracuję zdalnie. Charakteryzuje mnie szybkość
        przyswajania nowej wiedzy i technologii. Obecnie
        rozwijam się w kierunku programowania w języku
        JavaScript. W najbliższej przyszłości planuję poszerzać
        wiedzę również o technologie backend'owe jak Node.Js.
        Poszukuję nowych wyzwań, związanych z
        programowaniem aplikacji internetowych.
        </p>
        <p id='technologies'>Narzędzia i technologie:</p>
        <ul>
          <li>JavaScript (ES6)</li>
          <li>C/C++</li>
          <li>C#</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>jQuery</li>
          <li>AJAX / REST API</li>
          <li>HTML5 / CSS3 / SASS</li>
          <li>Webpack</li>
          <li>Git</li>
          <li>Trello</li>
          <li>Visual Studio Code</li>
          <li>Windows</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  );
}

export default About;