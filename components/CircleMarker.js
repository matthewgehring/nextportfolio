import React from 'react';

const CircleMarker = ({ emoji }) => {
  const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px', 
    height: '60px', 
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    border: '3px solid white',
    borderRadius: '50%', 
    fontSize: '30px', 
  };

  return (
    <div style={circleStyle}>
      {emoji}
    </div>
  );
};

export default CircleMarker;