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
          <h4 className='contact-name'>Scarlet Studio Urody Iwona Kosińska</h4>
          <h5>Adres:</h5>
          <p>Matki Teresy z Kalkuty 6/74</p>
          <p>19-300 Ełk</p>
          <h5>Telefon:</h5>
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

  .contact-name {
    margin-top: 3rem;
  }

  h5 {
    margin-top: 1rem;
  }

  @media ${breakpoints.md} {
    width: 80%;
    margin: 5rem auto;
  }
`;
