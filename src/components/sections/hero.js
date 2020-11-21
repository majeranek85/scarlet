import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroAnimatedText from '../common/heroAnimatedText';
import Button from '../common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { breakpoints } from '../../utils/breakpoints';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      face: file(relativePath: { eq: "tło.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledContainer>
      <Img fluid={data.face.childImageSharp.fluid} alt='Beautiful face' />
      <div className='text-wrapper'>
        <HeroAnimatedText />
        <div className='socials'>
          <Button href='https://instagram.com' target='_blank'>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <span className='visually-hidden'>Instagram</span>
          </Button>
          <Button href='https://www.facebook.com/rzesy.elk.9' target='_blank'>
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

const StyledContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: end;
  background: #fff;

  .gatsby-image-wrapper {
    max-height: 100vh;
    width: 100vw;
    margin-left: auto;
  }

  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);

    .socials {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
  }

  @media ${breakpoints.md}{
    .gatsby-image-wrapper {
      width: 50vw;
      max-height: 100vh;
    }
  }
`;
