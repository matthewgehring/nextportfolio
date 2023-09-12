import React from 'react';
import styles from '../styles/IntroBox.module.css'; // Asumiendo que tienes un archivo CSS llamado IntroBox.module.css
import mypic from '../assets/photo.jpg'
import Image from 'next/image'

const IntroBox = () => {
  return (
    <div className={styles.introBox}>
      <div className={styles.imageContainer}>
        <Image src={mypic} className={styles.profileImage} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Matthew</h1>
        <p className={styles.description}>Aquí puedes agregar más información sobre ti, carnal.</p>
      </div>
    </div>
  );
};

export default IntroBox;
