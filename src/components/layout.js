import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.primary};
`
const ChildContainer = styled.main`
  position: relative;
  flex-grow: 1;
  margin-top: 97px;
  background: #fff;
  width: 90%;
  margin: 0 auto;
  padding:0;

  clip-path:
    polygon(
      0% 40px,  /* top left */
      40px 0%,  /* top left */
      100% 0%,  /* top right */
      100% 100%,/* bottom right */
      0% 100%,  /* bottom left */
      0% 100%    /* bottom left */
    );
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ChildContainer>{children}</ChildContainer>
        <footer>
          © {new Date().getFullYear()}, Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </PageContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
