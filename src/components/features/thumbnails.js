import React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
//import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import {theme} from '../../utils/theme'
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

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = photos.indexOf(imageToShow);
    if (currentIndex >= photos.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = photos[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = photos.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = photos[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  console.log(imageToShow);
  return (
    <StyledContainer>
      {photos.map((photo, id) => (
        <StyledImageWrapper key={id} onClick={() => showImage(photo)}>
          <img src={photo.fluid.srcSet} alt={photo.alt} tabIndex={id}/>
        </StyledImageWrapper>
      ))}
      {
        lightboxDisplay ?
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow.fluid.srcSet}></img>
            <button onClick={showNext}>⭢</button>
          </div>
        : ''
      }
    </StyledContainer>
  );
};

export default Thumbnails;

// Style

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;

  #lightbox-img {
  height: 80vh;
  max-width: 80vw;
  object-fit: cover;
  z-index: 999;
}

#lightbox {
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  color: ${theme.text};
  border: 2px solid ${theme.coral};
  border-radius: 5px;
  background-color: ${theme.coral};
  font-size: 36px;
  outline: thin dotted;
  margin: 10px;

}

button:hover {
  cursor: pointer;
}

`;

const StyledImageWrapper = styled.a`
  display: block;
  height: 360px;
  max-width: 360px;
  padding: 10px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

 :before {
    content: url('https://api.iconify.design/oi:magnifying-glass.svg?color=white&width=50&height=50');
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
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
  }

  @media ${breakpoints.lg}{
    :hover:before{
      opacity: 60%;
      transition: .5s;
      cursor: pointer;
    }
  }
`;
