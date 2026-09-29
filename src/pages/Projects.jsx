import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Fictional Cafe Landing Page',
    description:
      'A responsive cafe website designed with a clean and attractive user interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imageText: 'Cafe Website',
    link: 'https://github.com/Suhani-Aggarwal/FictionalCafeLandingPage'
  },

  {
    name: 'Mini CRUD App',
    description:
      'A React-based CRUD application for adding, editing, deleting, searching and managing records.',
    technologies: ['React', 'JavaScript', 'Bootstrap', 'LocalStorage'],
    imageText: 'CRUD Application',
    link: 'https://github.com/Suhani-Aggarwal/MiniCrudApp'
  },

  {
    name: 'PocketTrack',
    description:
      'An expense tracking application for managing expenses and viewing spending information.',
    technologies: ['React', 'JavaScript', 'LocalStorage', 'Chart.js'],
    imageText: 'Expense Tracker',
    link: 'https://github.com/Suhani-Aggarwal/PocketTrack'
  },

  {
    name: 'Document Based Question Answering System',
    description:
      'A project focused on answering questions using information from uploaded documents.',
    technologies: [],
    imageText: 'Question Answering',
    link: 'https://github.com/Suhani-Aggarwal/DocumentBasedQuestionAnsweringSystem'
  },

  {
    name: 'House Price Prediction App',
    description:
      'A machine learning application that predicts house prices based on input features.',
    technologies: ['Python', 'Machine Learning'],
    imageText: 'House Price Prediction',
    link: 'https://github.com/Suhani-Aggarwal/HousePricePredictionApp'
  },

  {
    name: 'Customer Support Chatbot',
    description:
      'A Python-based chatbot application designed to respond to customer support queries.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'HTML'],
    imageText: 'Customer Support AI',
    link: 'https://github.com/Suhani-Aggarwal/CustomerSupportChatbot'
  },

  {
    name: 'Customer Churn Prediction App',
    description:
      'A machine learning application that predicts whether a customer is likely to leave a service.',
    technologies: ['Python', 'Machine Learning'],
    imageText: 'Churn Prediction',
    link: 'https://github.com/Suhani-Aggarwal/CustomerChurnPredictionApp'
  },

  {
    name: 'To Do App',
    description:
      'A simple web application for creating and managing daily tasks.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageText: 'Task Manager',
    link: 'https://github.com/Suhani-Aggarwal/ToDoApp'
  },

  {
    name: 'Marketing Campaign Effectiveness Analyzer',
    description:
      'A data analysis project that studies marketing campaign performance using data visualization and statistical analysis.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'SciPy'],
    imageText: 'Marketing Analytics',
    link: 'https://github.com/Suhani-Aggarwal/MarketingCampaignEffectivenessAnalyzer'
  },

  {
    name: 'Driver Drowsiness Detector',
    description:
      'A computer vision and machine learning project that identifies whether a driver is drowsy or non-drowsy.',
    technologies: ['Python', 'OpenCV', 'HOG', 'SVM', 'Machine Learning'],
    imageText: 'Drowsiness Detection',
    link: 'https://github.com/Suhani-Aggarwal/Driver_Drowsiness_Detector'
  },

  {
    name: 'Sentiment Analysis',
    description:
      'A natural language processing project that analyzes text and predicts its sentiment.',
    technologies: ['Python', 'NLP', 'TF-IDF', 'Machine Learning'],
    imageText: 'Sentiment Analysis',
    link: 'https://github.com/Suhani-Aggarwal/Sentiment-Analysis'
  },

  {
    name: 'Credit Card Fraud Detection',
    description:
      'A machine learning application that detects potentially fraudulent credit card transactions.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    imageText: 'Fraud Detection',
    link: 'https://github.com/Suhani-Aggarwal/Credit-Card-Fraud-Detection'
  }
];

function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (selectedTech === 'All') {
      return true;
    }

    return project.technologies.includes(selectedTech);
  });

  return (
    <section className="projects-page">

      <div className="projects-heading">
        <p>MY WORK</p>
        <h1>Projects</h1>
      </div>

      <div className="project-filters">

        <button
          className={selectedTech === 'All' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('All')}
        >
          All
        </button>

        <button
          className={selectedTech === 'Python' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('Python')}
        >
          Python
        </button>

        <button
          className={selectedTech === 'React' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('React')}
        >
          React
        </button>

        <button
          className={selectedTech === 'JavaScript' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('JavaScript')}
        >
          JavaScript
        </button>

        <button
          className={selectedTech === 'HTML' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('HTML')}
        >
          HTML
        </button>

        <button
          className={selectedTech === 'Machine Learning' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('Machine Learning')}
        >
          Machine Learning
        </button>

        <button
          className={selectedTech === 'NLP' ? 'active-filter' : ''}
          onClick={() => setSelectedTech('NLP')}
        >
          NLP
        </button>

      </div>

      <div className="projects-container">

        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <span>{project.imageText}</span>
            </div>

            <div className="project-content">

              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View on GitHub
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;