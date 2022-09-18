import React from 'react';

function About() {
  return (
    <div className='about' id='about'>
      <h2>About me</h2>
      <div className='about-content'>
        {/* <p>Frontend developer
        </p> */}
        <p id='technologies'>Tools and technologies</p>
        <ul>
          <li>JavaScript | TypeScript</li>
          <li>React.js | Vue.js</li>
          <li>Node.js | Express</li>
          <li>Jest | Enzyme</li>
          <li>AJAX | REST API</li>
          <li>HTML5 | CSS3 | SASS</li>
          <li>GitHub | Bitbucket</li>
          <li>JIRA | Confluence</li>
          <li>Visual Studio Code</li>
          <li>Windows</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  );
}

export default About;