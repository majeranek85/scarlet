import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import DesktopCategories from '../components/features/desktopCategories';

const Treatments = () => {

  return (
    <Layout>
      <SEO title='Zabiegi' />
      <StyledContainer>
        <PageTitle title='Oferta zabiegów' />
        <DesktopCategories/>
      </StyledContainer>
    </Layout>
  );
};

export default Treatments;

// Style

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  ul {
    flex-direction: row;
    margin: 50px auto 0 auto;
    flex-wrap: wrap;

    li {
      .image-box {
        width: 250px;
        height: 250px
      }
    }
  }
`;


