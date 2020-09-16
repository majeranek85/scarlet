import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroAnimatedText from './heroAnimatedText';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      face: file(relativePath: { eq: "scarlet-studio-face.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledContainer>
      <Img fluid={data.face.childImageSharp.fluid} alt='face' />
      <div className='text-wrapper'>
        <HeroAnimatedText />
      </div>
    </StyledContainer>
  );
};

export default Hero;

const StyledContainer = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    max-height: 100vh;
  }

  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
  }
`;
