import React from 'react';
import styled from 'styled-components';

import { Devider } from './Devider';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Devider>
        <Title>HeadHunter</Title>
      </Devider>
    </Wrapper>
  );
};
