import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Thumbnails from '../components/features/thumbnails';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const GalleryPage = () => (
  <Layout>
    <SEO title='Galeria' />
    <StyledContainer>
      <PageTitle title='Galeria' />
      <Thumbnails />
    </StyledContainer>
  </Layout>
);

export default GalleryPage;

// Style

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
