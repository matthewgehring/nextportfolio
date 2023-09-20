import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from '../styles/Home.module.css'
import Hero from '../components/IntroBox';
import Picture from '../components/Picture';
import LightSwitch from '../components/LightSwitch';
import Project from '../components/Project';
import ProjectHorizontal from '../components/ProjectHorizontal';

//layouts
import Large from '../layouts/Large';
import Small from '../layouts/Small';
const ResponsiveGridLayout = WidthProvider(Responsive);

const NavBar = ({activeButton, setActiveButton}) => {

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.navbarContainer}>

      <div className={styles.logo}>
        <span>Logo</span>
      </div>

      <div className={styles.navbarButtons}>
        <div 
          className={`${styles.navButton} ${activeButton === 'home' ? styles.selected : ''}`}
          onClick={() => handleButtonClick('home')}
        >
          Home
        </div>
        <div 
          className={`${styles.navButton} ${activeButton === 'projects' ? styles.selected : ''}`}
          onClick={() => handleButtonClick('projects')}
        >
          Projects
        </div>
        <div 
          className={`${styles.navButton} ${activeButton === 'contact' ? styles.selected : ''}`}
          onClick={() => handleButtonClick('contact')}
        >
          Contact
        </div>
        <div 
          className={`${styles.navButton} ${activeButton === 'about' ? styles.selected : ''}`}
          onClick={() => handleButtonClick('about')}
        >
          About
        </div>
      </div>
      <div className={styles.buttonContainer}>

    </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [activeButton, setActiveButton] = useState('home');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const layouts = {
    lg: Large[activeButton],
    sm: Small[activeButton]
  };

  return (
    <div>
      <div style={{ marginBottom: '50px' }}>
        <NavBar activeButton={activeButton} setActiveButton={setActiveButton}/>
      </div>

    <div className={styles.gridPage}>
      <div className={styles.gridContainer}>
          <ResponsiveGridLayout 
            className="layout" 
            layouts={layouts} 
            compactType='vertical'
            isResizable={false}
            cols={{ lg: 10, md:8, sm:6, xs:2  }}
            margin={[16,16]}
            containerPadding={[0,0]}
            rowHeight={280}
            isBounded={true}
            maxRows={12}
            draggableHandle='.drag'
            >
            <div className={`${styles.card} drag`} key="intro">
              <Hero />
            </div>
            <div className={`${styles.card} drag`} key="project1">
              <Project />
            </div>
            <div className={`${styles.card} drag`} key="project2">
            <Project />

            </div>
            <div className={`${styles.card} drag`} key="project3">
              <ProjectHorizontal/>
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
