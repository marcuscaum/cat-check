import React from 'react';
import { Main, Container, Header } from './index.styled';
import ImageChooser from '../../components/ImageChooser';

const App = () => (
  <Main>
    <Container>
      <Header>
        Which of these is a cat?
      </Header>
      <ImageChooser />
    </Container>
  </Main>
);

export default App;
