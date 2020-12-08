import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { theme } from '../../utils/theme';

const HeroAnimatedText = () => {
  return (
    <StyledWrapper>
      <h1>
        Scarlet
      </h1>
      <p><span>Mobilny</span> gabinet kosmetyczny</p>
    </StyledWrapper>
  );
};

export default HeroAnimatedText;

// style

const StyledWrapper = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-family: 'roboto';
    color: ${theme.text};
    text-shadow: 0.3rem 0.3rem 0.5rem gray;
    text-transform: uppercase;
    font-weight:100;
    margin-bottom: 0;
  }

  p {
    font-size: 0.9rem;
    font-family: 'oxygen';
    letter-spacing: 1px;
    transition: all 0.5s ease-out;
    margin-bottom: 0;
    font-weight: 400;

    span {
      color: ${theme.header};
      font-weight: 700;
    }
  }

  @media ${breakpoints.sm} {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 3.4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media ${breakpoints.lg} {
    h1 {
      font-size: 5.5rem;
    }

    p {
      font-size: 2.5rem;
    }
  }
`;
