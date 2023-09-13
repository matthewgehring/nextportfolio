import React, {useState} from 'react';
import styles from '../styles/LightSwitch.module.css'; // Asumiendo que tienes un archivo CSS llamado IntroBox.module.css


const LightSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
    <span onClick={() => setChecked(!checked)}>
        <input type="checkbox" className={styles.lightswitch} />
        <label for="lightswitch" className={styles.lightswitchlabel }>
            <div className={styles.screw}></div>
            <div className={checked ? styles.switch :  styles.switchOn}></div>
            <div className={styles.screw}></div>
        </label>
        </span>
        </div>
  );
};

export default LightSwitch;
