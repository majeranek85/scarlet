import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Slider from '../features/slider';
import { breakpoints } from '../../utils/breakpoints';
import PageTitle from '../common/pageTitle';

const description = {
  sectionTitle: 'O nas',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
};

const About = () => {
  return (
    <StyledContainer>
      <div className='content-wrapper'>
        <PageTitle title={description.sectionTitle} />
        <p>{description.paragraph}</p>
        <div className='slider-wrapper'>
          <Slider />
        </div>
      </div>
    </StyledContainer>
  );
};

export default About;

// style

const StyledContainer = styled.section`
  background: ${theme.secondary};
  padding-top: 0;
  font-size: 0.9rem;

  .content-wrapper {
    width: 100%;
    background: ${theme.secondary};
    margin: auto;
    text-align: center;
    padding: 1rem;

    p {
      padding-top: 40px;
    }
  }

  @media ${breakpoints.md} {
    font-size: 1rem;

    .content-wrapper {
      width: 80%;
      background: #fff;
      margin: 5rem auto;
    }
  }

  @media ${breakpoints.lg} {

    .content-wrapper {
      margin: 6rem auto;
    }

    .slider-wrapper{
      margin: 0 auto;
      width: 70%;
    }
  }
`;


