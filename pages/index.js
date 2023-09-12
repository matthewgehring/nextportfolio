import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from '../styles/Home.module.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState('about');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const layoutDict = {
    about:[
      { i: 'intro', x: 0, y: 0, w: 3, h: 1 },
      { i: 'project1', x: 6, y: 0, w: 2, h: 3 },
      { i: 'project2', x: 0, y: 2, w: 2, h: 3 },
      { i: 'project3', x: 6, y: 2, w: 2, h: 3 },
      { i: 'darkModeToggle', x: 0, y: 4, w: 1, h: 1 },
      { i: 'contact', x: 3, y: 4, w: 3, h: 1 },
      { i: 'socialMedia', x: 6, y: 4, w: 3, h: 1 },
    ],
    projects:[
      { i: 'intro', x: 0, y: 5, w: 3, h: 1 },
      { i: 'project1', x: 0, y: 0, w: 2, h: 3 },
      { i: 'project2', x: 3, y: 0, w: 2, h: 3 },
      { i: 'project3', x: 3, y: 0, w: 2, h: 3 },
      { i: 'darkModeToggle', x: 0, y: 4, w: 1, h: 1 },
      { i: 'contact', x: 5, y: 4, w: 3, h: 1 },
      { i: 'socialMedia', x: 6, y: 4, w: 3, h: 1 },
    ]
  }

  const layouts = {
    lg: layoutDict[activeButton],
  };

  return (
    <div className={styles.grid}>
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
    <div className={styles.navbar}>
        <div>Tu nombre</div>
        <div className={styles.navButtons}>
          <button onClick={() => handleButtonClick('about')}>About</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
        </div>
      </div>
      <ResponsiveGridLayout className="layout" layouts={layouts} isResizable={false} cols={{ lg: 6, md: 10, sm: 6, xs: 4, xxs: 2 }}>
        <div className={styles.card} key="intro">
          <h2>Intro</h2>
          <p>Welcome to my portfolio!</p>
        </div>
        <div className={styles.card} key="project1">
          <h2>Project 1</h2>
          <p>Description of project 1.</p>
        </div>
        <div className={styles.card} key="project2">
          <h2>Project 2</h2>
          <p>Description of project 2.</p>
        </div>
        <div className={styles.card} key="project3">
          <h2>Project 3</h2>
          <p>Description of project 3.</p>
        </div>
        <div className={styles.card} key="darkModeToggle">
          <h2>Dark Mode</h2>
          <button onClick={toggleDarkMode}>Toggle</button>
        </div>
        <div className={styles.card} key="contact">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
        </div>
        <div className={styles.card} key="socialMedia">
          <h2>Social Media</h2>
          <p>Links to social media.</p>
        </div>
      </ResponsiveGridLayout>
    </div>
    </div>
  );
};

export default PortfolioPage;
