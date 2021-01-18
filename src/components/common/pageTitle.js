import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { theme } from '../../utils/theme';

const PageTitle = props => {
  return (
    <StyledTitle>
      <h1>{props.title}</h1>
    </StyledTitle>
  );
};

export default PageTitle;

// Style

const StyledTitle = styled.div`
  padding-top: 0.2rem;
  position: relative;
  z-index: 0;
  margin-bottom: 50px;
  margin-top: 30px;
  ;

  h1 {
    font-size: 2rem;
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
