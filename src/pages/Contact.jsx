import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Contact - ${name}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href =
      `mailto:YOUR_EMAIL@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-page">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <span>
          Have a project idea or want to work together? Feel free to reach out.
        </span>
      </div>


      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>Let's Work Together</h2>

          <p>
            I am open to opportunities, collaborations, internships,
            freelance projects and interesting AI/ML or web development
            ideas.
          </p>


          <div className="contact-item">

            <h3>Email</h3>

            <a href="mailto:aggarwalsuhani040@gmail.com">
              aggarwalsuhani040@gmail.com
            </a>

          </div>


          <div className="contact-item">

            <h3>GitHub</h3>

            <a
              href="https://github.com/Suhani-Aggarwal"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Suhani-Aggarwal
            </a>

          </div>


          <div className="contact-item">

            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/suhani-aggarwal25/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/suhani-aggarwal25
            </a>

          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />


            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />


            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;