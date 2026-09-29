import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-page">

      <div className="experience-heading">
        <p>MY JOURNEY</p>
        <h1>Experience</h1>
      </div>

      <div className="experience-container">

        {/* AWS Student Builder Group */}
        <div className="experience-card">

          <div className="experience-date">
            2026 - Present
          </div>

          <div className="experience-content">

            <h2>AWS Student Builder Group</h2>

            <h3>Organizing Team Member</h3>

            <p className="experience-company">
              Chitkara University
            </p>

            <p>
              Selected as a member of the organizing team for the AWS
              Student Builder Group at Chitkara University. Contributing
              to student-focused technical activities, events and
              community initiatives.
            </p>

            <div className="experience-tags">
              <span>AWS</span>
              <span>Cloud Computing</span>
              <span>Technical Events</span>
              <span>Community</span>
            </div>

          </div>

        </div>


        {/* Triple One Solutions */}
        <div className="experience-card">

          <div className="experience-date">
            Internship
          </div>

          <div className="experience-content">

            <h2>Triple One Solutions</h2>

            <h3>Web Development Intern</h3>

            <p>
              Worked on web development tasks and built frontend projects
              using modern web technologies. Gained practical experience
              with website development, responsive design and
              JavaScript-based interfaces.
            </p>

            <div className="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Responsive Design</span>
            </div>

          </div>

        </div>
        {/* Wayspire */}
<div className="experience-card">

  <div className="experience-date">
    Internship
  </div>

  <div className="experience-content">

    <h2>Wayspire</h2>

    <h3>AI and Machine Learning Internship Trainee</h3>

    <p className="experience-company">
      Wayspire · Remote
    </p>

    <p>
      Successfully completed a 3-month internship training in
      Artificial Intelligence and Machine Learning. Gained hands-on
      experience with machine learning algorithms, neural networks,
      data preprocessing, model training and evaluation.
    </p>

    <div className="experience-tags">
      <span>Python</span>
      <span>Machine Learning</span>
      <span>ANN</span>
      <span>CNN</span>
      <span>NumPy</span>
      <span>Pandas</span>
      <span>Scikit-learn</span>
      <span>TensorFlow</span>
      <span>Keras</span>
    </div>

  </div>

</div>


        {/* Education */}
        <div className="experience-card">

          <div className="experience-date">
            2025 - Present
          </div>

          <div className="experience-content">

            <h2>B.E. Computer Science Engineering</h2>

            <h3>Artificial Intelligence & Machine Learning</h3>

            <p className="experience-company">
              Chitkara University
            </p>

            <p>
              Currently pursuing Computer Science Engineering with a
              specialization in Artificial Intelligence and Machine
              Learning, developing skills in programming, machine
              learning, data science and web development.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>React</span>
              <span>SQL</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;