import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

import styles from '../styles/Home.module.css'
import Hero from '../components/IntroBox';
import MapPop from '../components/Map';
import LightSwitch from '../components/LightSwitch';
import Project from '../components/Project';
import SocialMedia from '../components/SocialMedia';
import ProjectHorizontal from '../components/ProjectHorizontal';
import { useBreakpointValue } from '@chakra-ui/react';

import Large from '../layouts/Large';
import Small from '../layouts/Small';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import seleniteImage from '../public/assets/selenite.png';

const projects = {
  "selenite" : {"title": "Selenite Serpent", 
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "image" : seleniteImage.src},
  "levrum" : {
                "title": "Levrum Technologies", 
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
  }

const ResponsiveGridLayout = WidthProvider(Responsive);

const NavBar = ({activeButton, setActiveButton}) => {
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.navbarContainer}>
      {/* Render buttons, centered */}
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
    md: Large[activeButton],
    sm: Small[activeButton],
    xs: Small[activeButton],
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
            cols={{ lg: 8, md: 8, sm: 4, xs: 4, xxs: 4 }} 
            margin={[16,16]}
            containerPadding={[0,0]}
            rowHeight={280}
            isBounded={true}
            maxRows={12}
            >
            <div className={`${styles.card} drag`} key="intro">
              <Hero />
            </div>
            <div className={`${styles.card} drag`} key="project1">
              <Project projectTitle={projects.selenite.title}  projectDescription={projects.selenite.description} image={projects.selenite.image}/>
            </div>
            <div className={`${styles.card} drag`} key="project2">
            <Project projectTitle={projects.levrum.title}  projectDescription={projects.levrum.description} image={projects.selenite.image} />

            </div>
            <div className={`${styles.card} drag`} key="project3">
              <ProjectHorizontal/>
            </div>
            <div className={`${styles.card} ${styles.darkModeToggle} drag`} key="darkModeToggle">
              <LightSwitch/>
            </div>
            <div className={`${styles.card} drag`} key="contact">
              <Contact />
            </div>
            <div id="linkedin" className={`${styles.card} drag`} key="socialMedia">
            <SocialMedia
              imageUrl="./assets/linkedin.png"
              linkUrl="https://www.yourwebsite.com"
            />            </div>
            <div className={`${styles.card} drag`} key="blog">
              <Blog></Blog>
            </div>
            <div className={`${styles.card} drag`} key="map">
              <MapPop />
            </div>
            <div id="git" className={`${styles.card} drag`} key="git">
            <SocialMedia
              imageUrl="./assets/github.png"
              linkUrl="https://www.yourwebsite.com"
            />   
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
