import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
  width: 70%;
  margin:  50px auto;
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
    flex: 0 0 25%;

    .image-box {
      max-width: 200px;
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p{
      margin-top: 20px;
    }

    :hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }

`;