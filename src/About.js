import React from 'react';

function About() {
  return (
    <div className='about' id='about'>
      <h2>About me</h2>
      <div className='about-content'>
        <p> Posiadam doświadczenie w branży technologii
        internetowych oraz w pracy z klientem. Charakteryzuje
        mnie szybkość przyswajania nowej wiedzy i technologii.
        Obecnie udoskonalam swoje umiejętności
        programowania w języku JavaScript z wykorzystaniem
        najnowszych frameworków i trendów. W najbliższej
        przyszłości planuję poszerzać wiedzę również o
        technologie backend'owe. Poszukuję nowych wyzwań,
        związanych z programowaniem aplikacji internetowych.
        </p>
        <p id='technologies'>Narzędzia i technologie:</p>
        <ul>
          <li>JavaScript (ES6)</li>
          {/* <li>C/C++</li>
          <li>C#</li>
          <li>PHP</li>
          <li>SQL</li> */}
          <li>React.js (React Hooks, React Router, Redux)</li>
          <li>Vue.js</li>
          <li>Jest / Enzyme</li>
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