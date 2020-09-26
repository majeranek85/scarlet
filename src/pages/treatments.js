import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Treatments = () => {
  return (
    <Layout>
      <SEO title='Zabiegi' />
      <StyledContainer>
        <PageTitle title='Zabiegi' />
      </StyledContainer>
    </Layout>
  );
};

export default Treatments;

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
`;
