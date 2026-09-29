import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-page">

      <div className="skills-heading">
        <p>What I Work With</p>
        <h1>My Skills</h1>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h2>Programming</h2>

          <div className="skill-list">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>C</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>AI & Machine Learning</h2>

          <div className="skill-list">
            <span>Machine Learning</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>XGBoost</span>
            <span>Data Analysis</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Web Development</h2>

          <div className="skill-list">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Backend & Applications</h2>

          <div className="skill-list">
            <span>FastAPI</span>
            <span>Streamlit</span>
            <span>REST APIs</span>
            <span>LocalStorage</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>

          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Joblib</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Skills;