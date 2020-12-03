import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
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

const StyledTitle = styled.div`
  padding-top: 1rem;
  position: relative;
  z-index: 0;
  ;

  h1 {
    font-size: 2rem;
    padding-top: 1rem;
    text-align: center;
    font-weight: 300;
  }

  :after {
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    height: 3px;
    width: 100px;
    background: ${theme.coral};
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 2.5rem;
    }

  }
`;
