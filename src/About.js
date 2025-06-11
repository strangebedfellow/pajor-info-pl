import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <h2>About me</h2>
      <div className="about-content">
        <p>Profile</p>
        <div>
          I have experience in building modern web applications using React,
          TypeScript, and Next.js. I possess practical knowledge in designing
          responsive user interfaces and have experience working in a team
          environment using the Agile methodology. I focus on delivering
          efficient, readable, and scalable frontend solutions.
        </div>
        <p>Tools and technologies</p>
        <ul>
          <li>JavaScript (ES6+) | TypeScript | HTML5 | CSS3</li>
          <li>React | Next.js | Redux | React Query</li>
          <li>Tailwind CSS | CSS Modules |Styled Components</li>
          <li>JIRA | Git | GitHub/GitLab | VS Code | Figma</li>
          <li>Jest | React Testing Library</li>
          <li>REST API | Contentful</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
