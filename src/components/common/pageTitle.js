import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

const PageTitle = props => {
  return (
    <StyledTitle>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </StyledTitle>
  );
};

export default PageTitle;

// Style

const StyledTitle = styled.header`
  padding-top: 20px;
  position: relative;
  ;

  h1 {
    padding-top: 1rem;
    text-align: center;
    font-weight: 300;
  }

  :after {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    height: 4px;
    width: 150px;
    background: ${theme.coral};
  }
`;
