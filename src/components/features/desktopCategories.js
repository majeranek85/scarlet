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
          id
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
          <li key={node.id}>
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
    margin:  30px auto 0 auto;
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
        padding: 5px;
        box-shadow: 0 0 10px 3px ${theme.coralOpacity};

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }

        .overlay {
          z-index: 3;
          background: ${theme.linearGradient};
          position: absolute;
          bottom: 0;
          left: 0;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          color: ${theme.textLight};
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin: 5px;
          border-radius: 5px;
        }
      }

      p {
        font-size: 0.9rem;
        padding-bottom: 10px;
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
    margin: 0 auto;

    li .image-box {
        width: 180px;
        height: 130px;

      p {
        padding-bottom: 30px;
      }
    }
  }
`;