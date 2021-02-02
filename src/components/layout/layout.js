import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer className='page-container'>
        <Header siteTitle={data.site.siteMetadata.title} className='header-container' />
        <ChildContainer className='page-content-container'>{children}</ChildContainer>
        <Footer/>
      </PageContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// Style

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.secondary};
`;
const ChildContainer = styled.main`
  position: relative;
  flex-grow: 1;
  background: ${theme.secondary};
  width: 100%;
  padding: 0;
  margin: 3rem auto 0 auto;
`;
