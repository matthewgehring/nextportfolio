import React from 'react';
import styles from '../styles/LightSwitch.module.css'; // Asumiendo que tienes un archivo CSS llamado IntroBox.module.css


const LightSwitch = () => {
  return (
    <div>
        <input type="checkbox" className={styles.lightswitch}/>
        <label for="light-switch" className={styles.lightswitchlabel}>
            <div className={styles.screw}></div>
            <div className={styles.switch}></div>
            <div className={styles.screw}></div>
        </label>
        </div>
  );
};

export default LightSwitch;
