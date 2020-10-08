import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const style = {
    width: '100%',
    right: 0,
    left: 0,
  };

  return (
    <Carousel>
      <Carousel.Item>
        <Img fluid={data.slide1.childImageSharp.fluid} alt='1' />
        <Carousel.Caption style={style}>
          <StyledCap>
            <h3>First slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </StyledCap>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={data.slide2.childImageSharp.fluid} alt='2' />
        <Carousel.Caption style={style}>
          <StyledCap>
            <h3>First slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </StyledCap>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={data.slide3.childImageSharp.fluid} alt='3' />
        <Carousel.Caption style={style}>
          <StyledCap>
            <h3>First slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </StyledCap>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={data.slide4.childImageSharp.fluid} alt='4' />
        <Carousel.Caption style={style}>
          <StyledCap>
            <h3>First slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </StyledCap>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

// Style

const StyledCap = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;
