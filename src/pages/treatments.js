import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import DesktopCategories from '../components/features/desktopCategories';
//import { breakpoints } from '../utils/breakpoints';
//import { theme } from '../utils/theme';
//import Accordion from '../components/features/accordion';

const Treatments = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsTreatment {
        nodes {
          category
          key
          description
          title
          effects {
            name
          }
          contraindications {
            name
          }
          recommendations {
            name
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
  //console.log(treatments);
  const arr = [];
  treatments.map(item => arr.includes(item.category) ? null : arr.push(item.category) )
  //console.log(arr);

  return (
    <Layout>
      <SEO title='Zabiegi' />
      <StyledContainer>
        <PageTitle title='Oferta zabiegów' />
        <DesktopCategories categories={arr} />
        <StyledItems>

          {/*treatments.map((item) => (
            <StyledWrapper key={item.key}>
              <div className='image-box'>
                <img src={item.image.fluid.srcSet} alt={item.image.alt} />
              </div>
              <div className='description-box'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>Kategoria: </span>
                <p className='kategorie'>{item.treatment}</p>
              </div>
              <Accordion
                title='czytaj więcej'
                effects={item.effects}
                contraindications={item.contraindications}
                recommendations={item.recommendations}
              />
            </StyledWrapper>
          ))*/}
        </StyledItems>
      </StyledContainer>
    </Layout>
  );
};

export default Treatments;

// Style

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

/*const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;

  :nth-child(odd) {
    background: ${theme.secondary};
  }

  .image-box {
    flex: 0 0 50%;
    background: gray;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
  }

  .description-box {
    flex: 0 0 50%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    span {
      margin-top: auto;
    }

    .kategorie {
      color: ${theme.coral};
    }

    h3 {
      color: ${theme.header};
      text-align: center;
      font-weight: 100;
    }
  }

  @media ${breakpoints.lg} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px 10% 0 10%;

    .accordion-section {
      margin: 30px 0;
      order: 3;
    }

    :nth-child(even) {
      .description-box{
        padding-left: 30px;
      }
    }

    :nth-child(odd) {
      background: ${theme.secondary};
      box-shadow: 0px 0px 10px 0px #aa9c9d;

      .image-box {
        order: 1;
      }

      .description-box {
        padding-right: 30px;
      }
    }
  }
`;*/
