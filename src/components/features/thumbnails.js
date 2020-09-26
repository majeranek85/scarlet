import React from 'react';
import styled from 'styled-components';
//import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Thumbnails = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsGallery {
        nodes {
          photos {
            alt
            fluid {
              srcSet
            }
          }
        }
      }
    }
  `);

  const photos = data.allDatoCmsGallery.nodes[0].photos;
  console.log(photos);

  return (
    <StyledContainer>
      {photos.map((photo, id) => (
        <StyledImageWrapper key={id}>
          <img src={photo.fluid.srcSet} alt={photo.alt} />
        </StyledImageWrapper>
      ))}
    </StyledContainer>
  );
};

export default Thumbnails;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;

const StyledImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;
