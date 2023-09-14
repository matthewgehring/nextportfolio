import React, { useState } from 'react';

import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from '../styles/Home.module.css'
import IntroBox from '../components/IntroBox';
import Picture from '../components/Picture';
import LightSwitch from '../components/LightSwitch';
import Project from '../components/Project';

const ResponsiveGridLayout = WidthProvider(Responsive);

const PortfolioPage = () => {
  const [activeButton, setActiveButton] = useState('about');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const layoutDict = {
    home:[
      { i: 'intro', x: 0, y: 0, w: 4, h: 1 },
      { i: 'map', x: 4, y: 0, w: 2, h: 1},
      { i: 'contact', x: 0, y: 3, w: 4, h: 1},
      { i: 'blog', x: 4, y: 3,w: 4, h: 1 },
      { i: 'project1', x: 6, y: 0, w: 2, h: 2 },
      { i: 'project2', x: 4, y: 1, w: 2, h: 2 },
      { i: 'project3', x: 0, y: 2,   w: 4, h: 1},
      { i: 'darkModeToggle', x: 6, y: 2, w: 2, h: 1},
      { i: 'spotify', x: 0, y: 1, w: 2, h: 1},
      { i: 'socialMedia', x: 2, y: 1, w: 2, h: 1 },
    ],
    projects:[
      { i: 'intro', x: 0, y: 1, w: 4, h: 1 },
      { i: 'map', x: 4, y: 2, w: 2, h: 1},
      { i: 'contact', x: 0, y: 3, w: 4, h: 1},
      { i: 'blog', x: 4, y: 3,w: 4, h: 1 },
      { i: 'project1', x: 6, y: 0, w: 2, h: 2 },
      { i: 'project2', x: 4, y: 0, w: 2, h: 2 },
      { i: 'project3', x: 0, y: 0,   w: 4, h: 1},
      { i: 'darkModeToggle', x: 6, y: 2, w: 2, h: 1},
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
      { i: 'socialMedia', x: 2, y: 2, w: 2, h: 1 },
    ],
    contact:[
      { i: 'intro', x: 4, y: 0, w: 4, h: 1 },
      { i: 'map', x: 4, y: 2, w: 2, h: 1},
      { i: 'contact', x: 0, y: 0, w: 4, h: 1},
      { i: 'blog', x: 0, y: 3,w: 4, h: 1 },
      { i: 'project1', x: 6, y: 0, w: 2, h: 2 },
      { i: 'project2', x: 4, y: 0, w: 2, h: 2 },
      { i: 'project3', x: 0, y: 0,   w: 4, h: 1},
      { i: 'darkModeToggle', x: 6, y: 2, w: 2, h: 1},
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
      { i: 'socialMedia', x: 2, y: 2, w: 2, h: 1 },
    ],
    about:[
      { i: 'intro', x: 0, y: 0, w: 4, h: 1 },
      { i: 'map', x: 4, y: 0, w: 2, h: 1},
      { i: 'contact', x: 4, y: 1, w: 4, h: 1},
      { i: 'blog', x: 0, y: 1,w: 4, h: 1 },
      { i: 'project1', x: 6, y: 2, w: 2, h: 2 },
      { i: 'project2', x: 4, y: 2, w: 2, h: 2 },
      { i: 'project3', x: 0, y: 3,   w: 4, h: 1},
      { i: 'darkModeToggle', x: 2, y: 2, w: 2, h: 1},
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
      { i: 'socialMedia', x: 6, y: 0, w: 2, h: 1 },
    ]
  }

  const layouts = {
    lg: layoutDict[activeButton],
  };

  return (
    <div>
    <div className={styles.navbar}>
        <div>MG</div>
        <div className={styles.navButtons}>
          <button onClick={() => handleButtonClick('home')}>Home</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
          <button onClick={() => handleButtonClick('about')}>About</button>
        </div>
      </div>
    <div className={styles.gridPage}>
      <div className={styles.gridContainer}>
          <ResponsiveGridLayout 
            className="layout" 
            layouts={layouts} 
            compactType='vertical'
            isResizable={false}
            cols={{ lg: 20, md:8, s:6, xs:2  }}
            margin={[16,16]}
            containerPadding={[0,0]}
            rowHeight={280}
            isBounded={true}
            maxRows={12}
            draggableHandle='.drag'
            >
            <div className={`${styles.card} drag`} key="intro">
              <IntroBox />
            </div>
            <div className={`${styles.card} drag`} key="project1">
              <Project />
            </div>
            <div className={`${styles.card} drag`} key="project2">
              <h2>Project 2</h2>
              <p>Description of project 2.</p>
            </div>
            <div className={`${styles.card} drag`} key="project3">
              <h2>Project 3</h2>
              <p>Description of project 3.</p>
            </div>
            <div className={`${styles.card} ${styles.darkModeToggle} drag`} key="darkModeToggle">
              <LightSwitch/>
            </div>
            <div className={`${styles.card} drag`} key="contact">
              <h2>Contact</h2>
              <p>Email: example@example.com</p>
            </div>
            <div className={`${styles.card} drag`} key="socialMedia">
              <h2>Social Media</h2>
            </div>
            <div className={`${styles.card} drag`} key="blog">
              <h2>Blog</h2>
              <p>Links to blog.</p>
            </div>
            <div className={`${styles.card} drag`} key="map">
              <h2>map</h2>
              <p>map</p>
            </div>
            <div id="picture" className={`${styles.card}`} key="spotify">
              <h2 className='drag'>Picture</h2>
              <Picture />
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
