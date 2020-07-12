import React from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 16px;
  overflow: hidden;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default App;
