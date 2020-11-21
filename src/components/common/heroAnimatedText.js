import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

const HeroAnimatedText = () => {
  return (
    <StyledWrapper>
      <div className='text-area'>
        <span>s</span>
        <span>c</span>
        <span>a</span>
        <span>r</span>
        <span>l</span>
        <span>e</span>
        <span>t</span>
      </div>
      <p>Mobilny gabinet kosmetyczny</p>
    </StyledWrapper>
  );
};

export default HeroAnimatedText;

// style

const StyledWrapper = styled.div`
  text-transform: uppercase;
  text-align: center;

  .text-area {
    font-size: 30px;
    font-family: 'roboto';
    font-weight: 700;
    transition: all 0.5s ease-out;
    text-shadow: 3px 3px 5px gray;

    span {
      color: #262626;
      opacity: 1;
      //transform: rotate(-180deg);
      //animation: animate 3s forwards;
      display: inline-block;
      padding-right: 10px;

      /*:nth-of-type(2) {
        animation-delay: 0.1s;
      }
      :nth-of-type(3) {
        animation-delay: 0.2s;
      }
      :nth-of-type(4) {
        animation-delay: 0.3s;
      }
      :nth-of-type(5) {
        animation-delay: 0.4s;
      }
      :nth-of-type(6) {
        animation-delay: 0.5s;
      }
      :nth-of-type(7) {
        animation-delay: 0.6s;
      }*/
    }
  }

  p {
    font-size: 12px;
    font-family: 'oxygen';
    letter-spacing: 2px;
    transition: all 0.5s ease-out;
    margin-bottom: 0;
  }

  /*@keyframes animate {
    30% {
      transform: translate(0, -50px) rotate(180deg) scale(1);
    }
    50% {
      transform: translate(0, -20px) rotate(0deg) scale(1);
      opacity: 1;
    }
    80% {
      transform: translate(-100px, -100px) rotate(-180deg) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: translate(0) rotate(0) scale(1);
      opacity: 1;
    }
  }*/

  @media ${breakpoints.sm} {
    .text-area {
      font-size: 50px;
    }

    p {
      font-size: 18px;
    }
  }

  @media ${breakpoints.md} {
    .text-area {
      font-size: 70px;
    }

    p {
      font-size: 25px;
    }
  }

  @media ${breakpoints.lg} {
    .text-area {
      font-size: 110px;
    }

    p {
      font-size: 39px;
    }
  }
`;
