import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { theme } from '../../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { breakpoints } from '../../utils/breakpoints';

const MobileCategories = () => {

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

  const [setActive, setActiveState] = useState(false);

  const toggleSidebar = () => setActiveState(!setActive);


  return (
    <StyledContainer>
      <button onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
      <nav className={setActive ? 'active' : ''}>
        <ul>
          {categories.map( ({node}) => (
            <li key={node.slug}>
              <Link to={`/treatments/${node.slug}`} activeClassName='active'>
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
      </nav>
    </StyledContainer>

  )
}

export default MobileCategories;

// Style
const StyledContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;

  nav {
    background: ${theme.textLight};
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 3rem;
    left: -100%;
    transition: 850ms;

    li {
      height: 70px;
      border-bottom: 2px solid ${theme.secondary};
      display: flex;
      align-items: center;
      margin: 0;

      a {
        color: ${theme.text};
        text-decoration: none;
        display: block;
        width:100%;
      }

      a.active {
        color: ${theme.coral};
      }
    }
  }

  .active {
    left: 0;
    transition: 350ms;
  }

  button {
    height: 100vh;
    padding: 0 15px;
    background: none;
    border: none;
    border-right: 2px solid ${theme.secondary};
    outline: none;
    color: ${theme.header}
  }

  @media ${breakpoints.md} {
    display: none;
  }
`;
