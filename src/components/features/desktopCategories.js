import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { breakpoints } from '../../utils/breakpoints';

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
            <Link to={`/treatments/${node.slug}`}>
              <div className='image-box'>
                <img src={node.image.fluid.srcSet} alt={node.image.alt}/>
              </div>
              <p>{node.title}</p>
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
      color: inherit;
      text-transform: uppercase;
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

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      p {
        margin-top: 20px;
      }

      :hover {
        transform: scale(1.1);
        transition: all 0.3s;
      }
    }
  }

  @media ${breakpoints.lg} {
    width: 80%;
    flex-direction: column;
    margin: 50px 0 0 0;
  }
`;