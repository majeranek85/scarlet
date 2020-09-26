import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Kontakt' />
      <StyledContainer>
        <PageTitle title='Kontakt' />
      </StyledContainer>
    </Layout>
  );
};

export default ContactPage;

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
`;
