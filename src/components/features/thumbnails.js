import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SRLWrapper } from 'simple-react-lightbox';
import { theme } from '../../utils/theme';


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

  return (
    <SRLWrapper>
    <StyledContainer>
      {photos.map((photo, id) => (
        <StyledImageWrapper key={id}  href={photo.fluid.srcSet}>
          <img src={photo.fluid.srcSet} alt={photo.alt} />
        </StyledImageWrapper>
      ))}
    </StyledContainer>
    </SRLWrapper>
  );
};

export default Thumbnails;

// Style

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 3rem auto;
  //padding-top: 60px;
`;

const StyledImageWrapper = styled.a`
  display: block;
  height: 360px;
  max-width: 360px;
  padding: 5px;
  position: relative;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px ${theme.coralOpacity};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  :hover {
    transform: scale(1.02);
    transition: 300ms;
  }
`;
