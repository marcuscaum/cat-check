import styled from 'styled-components';

const images = require.context('../../images', true);

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Image = styled.img`
  display: flex;
  width: 280px;
  height: 280px;
  background-size: cover;
  cursor: pointer;
  background-image: url(${props => images(`./${props.id}.jpg`)});
`;
