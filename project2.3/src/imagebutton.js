import React, { useState } from 'react';
import house from './house.png'

const ImageToggleButton = () => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleImage}>
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
      {showImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={house}
            alt="Sad cottage explaining time constraint"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageToggleButton;