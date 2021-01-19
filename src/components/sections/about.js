import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Slider from '../features/slider';
import { breakpoints } from '../../utils/breakpoints';
import PageTitle from '../common/pageTitle';
import { graphql, useStaticQuery } from 'gatsby';


const About = () => {

  const data = useStaticQuery(graphql`
    {
      datoCmsHomePage {
        description
      }
    }
  `)

  const paragraph = data.datoCmsHomePage.description;
  return (
    <StyledContainer>
      <div className='content-wrapper'>
        <PageTitle title='O nas' />
        <p>{paragraph}</p>
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


