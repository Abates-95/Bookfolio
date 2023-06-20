import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      className="gradient-animation h-screen"
      style={{
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Adjust the z-index to be behind the title
      }}
    ></div>
  );
};

export default Background;
