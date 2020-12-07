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
          <p>Matki Teresy z Kalkuty 6/74</p>
          <p>19-300 Ełk</p>
          <p> tel: +48 514 737 283</p>

      </StyledContainer>
    </Layout>
  );
};

export default ContactPage;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${theme.textLight};
  padding-bottom: 57%;
  text-align: center;
  width: 100%;

  .contact-name {
    margin-top: 3rem;
  }

  @media ${breakpoints.md} {
    margin: 3rem auto;
    width: 80%;
    padding-bottom: 10%;
  }


`;
