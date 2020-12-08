import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from '../../utils/theme';

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "scarlet-studio-slide01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide2: file(relativePath: { eq: "scarlet-studio-slide02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide3: file(relativePath: { eq: "scarlet-studio-slide03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide4: file(relativePath: { eq: "scarlet-studio-slide04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledCarousel>
      <Carousel.Item>
        <Img loading='lazy' fluid={data.slide1.childImageSharp.fluid} alt='1' />
        <Carousel.Caption>
          <div>
            <h3>Stylizacja rzęs i brwi</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img loading='lazy' fluid={data.slide2.childImageSharp.fluid} alt='2' />
        <Carousel.Caption>
          <div>
            <h3>Zabiegi pielęgnacyjne</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img loading='lazy' fluid={data.slide3.childImageSharp.fluid} alt='3' />
        <Carousel.Caption>
          <div>
            <h3>Zabiegi oczyszczające i złuszczające</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img loading='lazy' fluid={data.slide4.childImageSharp.fluid} alt='4' />
        <Carousel.Caption>
          <div>
            <h3>Kosmetologia estetyczna</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
};

export default Slider;

// Style

const StyledCarousel = styled(Carousel)`
  margin: 3rem auto;
  .carousel-inner::after {
    position: absolute;
    content:'';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: ${theme.text};
    background: linear-gradient(180deg, rgba(68,44,46,0) 10%, rgba(68,44,46,0.8) 100%);
  }
`;

