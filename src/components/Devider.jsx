import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`;

export const Devider = ({ children }) => {
  return (
    <Wrapper>
      <Line style={{ marginRight: '24px' }} />
      {children}
      <Line style={{ marginLeft: '24px' }} />
    </Wrapper>
  );
};
