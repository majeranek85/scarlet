import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { theme } from '../../utils/theme';
import { breakpoints } from '../../utils/breakpoints';

const MobileCategoriesStatic = () => {

  const data = useStaticQuery(graphql`
  {
    allDatoCmsCategory {
      edges {
        node {
          slug
          title
          treatments {
            description
            effects
          }
        }
      }
    }
  }
  `);

  const categories = data.allDatoCmsCategory.edges;

  return (
      <StyledNav>
        <ul>
          {categories.map( ({node}) => (
            <li key={node.slug}>
              <Link to={`/treatments/${node.slug}`} activeClassName='active'>
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </StyledNav>
  )
}

export default MobileCategoriesStatic;

// Style
const StyledNav = styled.nav`
  width: 80%;
  margin: 0 auto;

  ul {
    list-style: none;

    li {
      height: 70px;
      border-bottom: 2px solid ${theme.primary};
      display: flex;
      align-items: center;
      margin: 0;

      a {
        color: ${theme.text};
        text-decoration: none;
        display: block;
        width:100%;
      }
    }
  }

  @media ${breakpoints.md} {
    display: none;
  }
`;