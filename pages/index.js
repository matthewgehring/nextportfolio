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
      { i: 'intro', x: 0, y: 0, w: 4, h: 1 },
      { i: 'map', x: 3, y: 0, w: 2, h: 1},
      { i: 'contact', x: 3, y: 2, w: 4, h: 1},
      { i: 'blog', x: 3, y: 4,w: 4, h: 1 },
      { i: 'project1', x: 6, y: 0, w: 2, h: 2 },
      { i: 'project2', x: 0, y: 2, w: 2, h: 2 },
      { i: 'project3', x: 6, y: 2,   w: 4, h: 1},
      { i: 'darkModeToggle', x: 0, y: 4, w: 2, h: 1},
      { i: 'spotify', x: 0, y: 4, w: 2, h: 1 },
      { i: 'socialMedia', x: 6, y: 4, w: 2, h: 1 },
    ],
    projects:[
      { i: 'intro', x: 3, y: 2, w: 5, h: 2},
      { i: 'contact', x: 0, y: 6, w: 5, h: 2 },
      { i: 'map', x: 3, y: 3, w: 1, h: 1 },
      { i: 'blog', x: 3, y: 4, w: 5, h: 2 },
      { i: 'project1', x: 0, y: 0, w: 2.5, h: 5 },
      { i: 'project2', x: 3, y: 0, w: 2.5, h: 5 },
      { i: 'project3', x: 6, y: 0,  w: 5, h: 2 },
      { i: 'darkModeToggle', x: 0, y: 6, w: 2.5, h: 2},
      { i: 'spotify', x: 0, y: 6, w: 2.5, h: 2 },
      { i: 'socialMedia', x: 6, y: 6, w: 2.5, h: 2 },
    ]
  }

  const layouts = {
    lg: layoutDict[activeButton],
  };

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
    <div className={styles.navbar}>
        <div>MG</div>
        <div className={styles.navButtons}>
          <button onClick={() => handleButtonClick('about')}>About</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
        </div>
      </div>
    <div className={styles.gridPage}>
      <div className={styles.gridContainer}>
          <ResponsiveGridLayout 
            className="layout" 
            layouts={layouts} 
            compactType='vertical'
            isResizable={false}
            transformScale
            cols={{ lg: 20, md:8  }}
            margin={[16,16]}
            containerPadding={[0,0]}
            rowHeight={280}
            maxRows={12}
            >
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
            <div className={styles.card} key="blog">
              <h2>Blog</h2>
              <p>Links to blog.</p>
            </div>
            <div className={styles.card} key="map">
              <h2>map</h2>
              <p>map</p>
            </div>
            <div className={styles.card} key="spotify">
              <h2>Spotify</h2>
              <p>Spotify.</p>
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
