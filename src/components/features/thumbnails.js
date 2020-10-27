import React from 'react';
import styled from 'styled-components';
//import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import {theme} from '../../utils/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { breakpoints } from '../../utils/breakpoints';

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
          <div className='overlay'>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </div>
        </StyledImageWrapper>
      ))}
    </StyledContainer>
  );
};

export default Thumbnails;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
`;

const StyledImageWrapper = styled.div`
  height: 360px;
  max-width: 360px;
  padding: 10px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    z-index: -1;
  }

  .overlay {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    border: 15px solid #fff;
    transform: translate(-50%, -50%);
    width: 341px;
    height: 341px;
    background: ${theme.coral};
    opacity: 0;
    z-index: 3;

    svg {
      position: absolute;
      font-size: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${breakpoints.lg}{
    :hover {
      .overlay {
        opacity: 60%;
        transition: .5s;
        cursor: pointer;
      }
    }
  }
`;
