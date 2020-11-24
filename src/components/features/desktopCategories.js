import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const DesktopCategories = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCategory {
        nodes {
          title
          slug
          image {
            fluid {
              srcSet
            }
            alt
          }
        }
      }
    }
  `);
  console.log(props);

  const categories = data.allDatoCmsCategory.nodes
  //const categories = [];
  //props.treatments.map(item => categories.includes(item.category) ? null : categories.push(item.category) )
  
  return (
    <nav>
      <StyledList>
        {categories.map( (item, id) => (
          <li key={id}>
            <a href='#test'>
              <div className='image-box'>
                <img src={item.image.fluid.srcSet} alt={item.image.alt}/>
              </div>
              <p>{item.title}</p>
            </a>
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
      border-radius: 50%;
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