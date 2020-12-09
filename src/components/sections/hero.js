import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
//import HeroAnimatedText from '../common/heroAnimatedText';
import Button from '../common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { breakpoints } from '../../utils/breakpoints';
import { theme } from '../../utils/theme';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      face: file(relativePath: { eq: "scarlet-home-optim.jpg" }) {
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

        <h1>
          <span>
            Mobilny
          </span>
           gabinet kosmetyczny
        </h1>

        <div className='buttons'>
        <Button className='callToAction' href='/contact'>Umów się już teraz!</Button>
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
  background: ${theme.textLight};

  .gatsby-image-wrapper {
    max-height: 100vh;
    width: 100vw;
    margin-left: auto;
  }

  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: 55%;

    h1 {
      display:flex;
      flex-direction: column;
      font-size: 1.3rem;
      font-family: 'oxygen';
      letter-spacing: 1px;
      margin-bottom: 0;
      text-align: center;

      span {
        color: ${theme.coral};
        font-weight: 700;
        font-size: 2.6rem;
      }
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      a {
        flex: 0 1 45px;
      }

      .callToAction {
        flex: 0 0 200px;
        text-decoration: none;
        display: flex;
        font-size: 0.8rem;
        justify-content: center;
        font-weight: 700;
      }
    }
  }

  @media ${breakpoints.md}{
    .gatsby-image-wrapper {
      width: 100vw;
    }

    .text-wrapper {
      left: 10%;

      h1 {
        font-size: 2rem;
        text-align: unset;

        span {
          font-size: 4rem;
        }
      }

      .buttons {
        justify-content: start;

        .callToAction {
        flex: 0 0 220px;
        font-size: 1rem;
        }
      }
    }
  }

  @media ${breakpoints.lg}{
    .gatsby-image-wrapper {
      width: 90vw;
    }

    .text-wrapper {
      h1 {
        font-size: 3.5rem;

        span {
          font-size: 7rem;
        }
      }
    }
  }
`;
