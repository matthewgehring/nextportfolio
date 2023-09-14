import React, { useEffect } from 'react';
import { render } from 'react-dom';
import photo from '../assets/photo.jpg'

import CanvasDraw from  'react-canvas-draw';
import styles from '../styles/Picture.module.css';

const Picture = () => {
  return (
    <div className={styles.canvas} style={{ textAlign: 'center' }}>
        <CanvasDraw
          brushColor="rgba(155,12,60,1)"
          imgSrc="https://i.imgur.com/5TBYh8W.png"
        />
    </div>
  );
};

export default Picture;
