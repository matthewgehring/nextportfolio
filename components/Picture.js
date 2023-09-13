import React, { useEffect } from 'react';
import { render } from 'react-dom';

import CanvasDraw from  'react-canvas-draw';
import styles from '../styles/Picture.module.css';

const Picture = () => {
  return (
    <div style={{ textAlign: 'center' }}>
        <CanvasDraw
          brushColor="rgba(155,12,60,0.3)"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
        />
    </div>
  );
};

export default Picture;
