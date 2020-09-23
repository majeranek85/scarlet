import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Slider from '../features/slider';
import { breakpoints } from '../../utils/breakpoints';

const description = {
  sectionTitle: 'O nas',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
};

const About = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <h1>{description.sectionTitle}</h1>
        <p>{description.paragraph}</p>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default About;

// style

const StyledContainer = styled.section`
  background: ${theme.secondary};
  padding-top: 0;

  @media ${breakpoints.md} {
    padding-top: 5rem;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  background: ${theme.secondary};
  margin: 0 auto;
  text-align: center;
  padding: 1rem;

  h1 {
    padding-top: 1rem;
  }

  p {
    line-height: 40px;
  }

  @media ${breakpoints.md} {
    width: 80%;
    background: #fff;
  }
`;

const SliderWrapper = styled.div`
  .carousel-caption,
  .carousel-indicators {
    z-index: 5;
  }

  @media ${breakpoints.xl} {
    margin: 0 auto;
    width: 70%;
    box-shadow: 0px 0px 10px 0px #aa9c9d;
  }
`;
