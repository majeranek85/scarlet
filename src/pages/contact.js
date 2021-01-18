import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { theme } from '../utils/theme';
import { breakpoints } from '../utils/breakpoints';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Kontakt' />
      <StyledContainer>
        <PageTitle title='Kontakt' />
        <h2 className='contact-name'>Scarlet Studio Urody Iwona Kosińska</h2>
        <h3>Adres:</h3>
        <p>Matki Teresy z Kalkuty 6/74</p>
        <p>19-300 Ełk</p>
        <h3>Telefon:</h3>
        <p>+48 514-737-283</p>
      </StyledContainer>
    </Layout>
  );
};

export default ContactPage;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${theme.textLight};
  text-align: center;
  width: 100%;
  padding: 1rem;

  h3 {
    margin-top: 1rem;
  }

  @media ${breakpoints.md} {
    width: 80%;
    margin: 4rem auto;
  }
`;
