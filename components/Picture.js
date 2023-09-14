import React, { useEffect,  useState} from 'react';
import { render } from 'react-dom';
import photo from '../assets/photo.jpg'

import CanvasDraw from  'react-canvas-draw';
import styles from '../styles/Picture.module.css';

const Picture = () => {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState('Draw');

  const handleClick = () => {
    setDisabled(!disabled);
    const text = disabled ? 'Draw' : 'Move';
    setText(text)
  }
  
  return (
    <div className={styles.canvas} style={{ textAlign: 'center' }}>
        <button onClick={() => handleClick()}>{text}</button>
        <CanvasDraw
          brushColor="rgba(155,12,60,1)"
          brushRadius={2}
          disabled={disabled}
          imgSrc="https://i.imgur.com/XCLF3lf.jpg"
        />
    </div>
  );
};

export default Picture;
