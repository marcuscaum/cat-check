import React, { useState, useEffect } from 'react';
import sampleSize from 'lodash.samplesize';

import { ImagesContainer, Image } from './index.styled';

const IMAGE_IDS = [...new Array(21).keys()].slice(1);

const ImageChooser = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const images = sampleSize(IMAGE_IDS, 2);
    setSelectedImages(images);
  }, []);

  return (
    <ImagesContainer>
      {selectedImages[0] && <Image id={selectedImages[0]} />}
      {selectedImages[1] && <Image id={selectedImages[1]} />}
    </ImagesContainer>
  );
};

export default ImageChooser;
