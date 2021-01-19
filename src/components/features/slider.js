import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from '../../utils/theme';

const Slider = () => {


  const data = useStaticQuery(graphql`
    {
      datoCmsHomePage {
        slider {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          alt
          title
        }
      }
    }
  `)

  const slides = data.datoCmsHomePage.slider;

  return (
    <StyledCarousel>
      {slides.map((slide, id) => (
        <Carousel.Item key={id}>
          <Img loading='lazy' fluid={slide.fluid} alt={slide.alt} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default Slider;

// Style

const StyledCarousel = styled(Carousel)`
  margin: 3rem auto;
  box-shadow: 0 0 10px 3px ${theme.coralOpacity};
  padding: 5px;
  border-radius: 5px;

  .carousel-inner::after {
    position: absolute;
    content:'';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.text};
    background: ${theme.linearGradient};
  }

  .carousel-caption h3 {
      padding-bottom: 30px;
    }
`;