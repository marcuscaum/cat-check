import React, { useState, useEffect } from 'react';
import sampleSize from 'lodash.samplesize';
import difference from 'lodash.difference';

import { ImagesContainer, Image } from './index.styled';

const IMAGE_IDS = [...new Array(21).keys()].slice(1);

const ImageChooser = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesList, setImagesList] = useState(IMAGE_IDS);

  const setRandomImages = () => {
    const images = sampleSize(imagesList, 2);
    setSelectedImages(images);
  };

  useEffect(() => {
    setRandomImages();
  }, []);

  useEffect(() => {
    const images = difference(imagesList, selectedImages);
    setImagesList(images);
  }, [selectedImages]);

  return (
    <ImagesContainer>
      {selectedImages[0] && <Image id={selectedImages[0]} onClick={setRandomImages} />}
      {selectedImages[1] && <Image id={selectedImages[1]} />}
    </ImagesContainer>
  );
};

export default ImageChooser;
