import React, {useState, useEffect} from 'react';
import styles from '../styles/LightSwitch.module.css';


const LightSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [activeTheme, setActiveTheme] = useState("light");

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    const handleClick = () => {
        setChecked(!checked)
        const inactiveTheme = activeTheme === "light" ? "dark" : "light";
        setActiveTheme(inactiveTheme)
  }

  return (
    <div>
        <input type="checkbox" className={styles.lightswitch} />
        <label className={ checked ? `${styles.lightswitchlabel} ${styles.off}` : styles.lightswitchlabel }>
            <div className={styles.screw}></div>
    <span onClick={() => handleClick()}>
            <div className={checked ? styles.switch :  styles.switchOn}></div>
        </span>
            <div className={styles.screw}></div>
        </label>
        </div>
  );
};

export default LightSwitch;
