import React, { useState } from 'react';
import { ImagesContainer, Image } from './index.styled';

const ImageChooser = () => {
  const [images, setImageProperties] = useState([]);

  return (
    <ImagesContainer>
      <Image id={2} />
      <Image id={3} />
    </ImagesContainer>
  );
};

export default ImageChooser;
