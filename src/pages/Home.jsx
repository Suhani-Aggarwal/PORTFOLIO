import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <p className="home-small-text">
          Hello, I'm
        </p>

        <h1>
          Suhani Aggarwal
        </h1>

        <h2>
          AI & ML Student | Python | React | Web Development
        </h2>

        <p className="home-description">
          I am an Artificial Intelligence and Machine Learning student
          interested in building practical AI/ML solutions and modern
          web applications.
        </p>

        <div className="home-buttons">

          <a href="/projects" className="primary-button">
            View Projects
          </a>

          <a href="/contact" className="secondary-button">
            Contact Me
          </a>

          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            View Resume
          </a>

        </div>

        <div className="home-links">

          <a
            href="https://github.com/Suhani-Aggarwal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suhani-aggarwal25/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>


      <div className="home-image">

        <img
          src="/assets/profile.jpeg"
          alt="Suhani Aggarwal"
        />

      </div>

    </section>
  );
}

export default Home;