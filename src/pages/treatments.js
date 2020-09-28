import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { breakpoints } from '../utils/breakpoints';
import { theme } from '../utils/theme';

const Treatments = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsTreatment {
        nodes {
          description
          title
          options {
            name
            description
          }
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

  const treatments = data.allDatoCmsTreatment.nodes;
  console.log(treatments);

  return (
    <Layout>
      <SEO title='Zabiegi' />
      <StyledContainer>
        <PageTitle title='Zabiegi' />
        <StyledItems>
          {treatments.map((item, id) => (
            <StyledWrapper key={id}>
              <div className='image-box'>
                <img src={item.image.fluid.srcSet} alt={item.image.alt} />
              </div>
              <div className='description-box'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ul>
                  {item.options.map((opt, id) => (
                    <li key={id}>
                      <h5>{opt.name}</h5>
                      <p>{opt.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </StyledWrapper>
          ))}
        </StyledItems>
      </StyledContainer>
    </Layout>
  );
};

export default Treatments;

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledItems = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;

  :nth-child(odd) {
    background: ${theme.secondary};
    box-shadow: 0px 0px 10px 0px #aa9c9d;

    .image-box {
      order: 1;
    }
  }

  .image-box {
    flex: 1;
    background: gray;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description-box {
    flex: 1;
    padding: 30px;

    h4 {
      color: #cd5b45;
    }
  }

  @media ${breakpoints.lg} {
    flex-direction: row;
    padding: 40px 10%;
  }
`;
