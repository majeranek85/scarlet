import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroAnimatedText from './heroAnimatedText';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
    <StyledContainer className='hero-container'>
      <Img fluid={data.face.childImageSharp.fluid} alt='face' />
      <div className='text-wrapper'>
        <HeroAnimatedText />
        <div className='socials'>
          <Button href='https://instagram.com' target='_blank'>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <span className='visually-hidden'>Instagram</span>
          </Button>
          <Button href='https://facebook.com' target='_blank'>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <span className='visually-hidden'>Facebook</span>
          </Button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Hero;

// style

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

    .socials {
      display: flex;
      justify-content: center;
    }
  }
`;
