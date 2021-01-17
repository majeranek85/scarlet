import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { breakpoints } from '../../utils/breakpoints';
import { theme } from '../../utils/theme';

const DesktopCategories = () => {

  const data = useStaticQuery(graphql`
  {
    allDatoCmsCategory {
      edges {
        node {
          image {
            alt
            fluid {
              srcSet
            }
          }
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
    <nav>
      <StyledList>
        {categories.map( ({node}) => (
          <li key={node.slug}>
            <Link to={`/treatments/${node.slug}`} activeClassName='active'>
              <div className='image-box'>
                <img src={node.image.fluid.srcSet} alt={node.image.alt}/>
                <div className='overlay'>
                  <p>{node.title}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </StyledList>
    </nav>
  )
}

export default DesktopCategories;

const StyledList = styled.ul`
  display: none;

  @media ${breakpoints.md} {
    display: block;
    width: 100%;
    margin:  50px auto 0 auto;
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: space-evenly;

    a {
      text-decoration: none;
      color: ${theme.text};
    }

    li {
      flex: 1;
      margin: 5px;

      .image-box {
        width: 180px;
        height: 80px;
        border-radius: 5px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        z-index: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          z-index: 3;
          background: ${theme.text};
          background: ${theme.linearGradient};
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: ${theme.textLight};
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
      }

      p {
        margin-bottom: 20px;
        padding-top: 10px;
      }

      :hover {
        transform: scale(1.1);
        transition: all 0.3s;

        a {
          color: ${theme.coral};
        }
      }

      .active {
        color: ${theme.coral};
      }
    }
  }

  @media ${breakpoints.lg} {
    width: 80%;
    flex-direction: column;
    margin: 2rem auto;

    li .image-box {
        width: 180px;
        height: 130px;
    }
  }
`;