import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">

      <div className="about-heading">
        <p>Get to Know Me</p>
        <h1>About Me</h1>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h2>I'm Suhani Aggarwal</h2>

          <p>
            I'm currently pursuing a Bachelor of Engineering in Computer
            Science and Engineering with a specialization in Artificial
            Intelligence and Machine Learning at Chitkara University.
          </p>

          <p>
            I enjoy building practical software solutions using AI/ML,
            Python, React, and web technologies. I like working on projects
            that combine technology with real-world problems.
          </p>

          <p>
            Along with machine learning, I have experience developing
            websites and web applications using React, HTML, CSS, and
            JavaScript.
          </p>

          <p>
            I'm continuously learning new technologies and improving my
            development skills through projects, internships, and
            collaborative experiences.
          </p>
        </div>

        <div className="about-details">

          <div className="detail-card">
            <h3>Education</h3>
            <p>B.E. CSE (AI & ML)</p>
            <span>Chitkara University</span>
          </div>

          <div className="detail-card">
            <h3>Focus</h3>
            <p>AI & Machine Learning</p>
            <span>Web & Software Development</span>
          </div>

          <div className="detail-card">
            <h3>Interests</h3>
            <p>AI/ML</p>
            <span>React · Python · Web Development</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;