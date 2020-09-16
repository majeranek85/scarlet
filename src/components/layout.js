import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

import Header from './header';
import './layout.css';

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
      <PageContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ChildContainer>{children}</ChildContainer>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
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
  background: #fff;
  width: 100%;
  padding: 0;
  margin: 3rem auto;

  //clip-path: polygon(0% 40px, 40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
`;
