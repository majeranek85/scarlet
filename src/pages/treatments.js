import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { breakpoints } from '../utils/breakpoints';
import { theme } from '../utils/theme';
import Accordion from '../components/features/accordion';

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
              <Accordion
                title='czytaj więcej...'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper consectetur mi a euismod. Fusce faucibus nibh eget luctus lobortis. Morbi consequat turpis vitae magna hendrerit facilisis. Morbi iaculis faucibus magna, sit amet sodales ipsum lacinia nec. Maecenas ac metus nibh. Quisque non tortor rutrum, ultrices lorem nec, sodales ligula. Sed fermentum libero in mi luctus accumsan. Nulla dictum, lacus eu accumsan malesuada, arcu nisl finibus ante, non scelerisque nisl nibh eu dolor. Sed a tortor ut nunc pretium vehicula id id sem. Nam nulla arcu, scelerisque vitae ornare sit amet, facilisis sit amet elit. Phasellus vel purus eu nisi bibendum posuere id eu nisi. Nulla facilisi. Morbi tincidunt lacinia arcu. Nam eleifend risus quis justo congue, sed feugiat diam lacinia. Etiam bibendum, mauris non feugiat finibus, lectus purus efficitur tellus, a interdum ex dolor ut neque.'
              />
            </StyledWrapper>
          ))}
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

const StyledWrapper = styled.div`
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
    height: 400px;


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


    h4 {
      color: #cd5b45;
    }
  }

  .accordion-section{
    flex: 0 0 100%;

    width: 100%;
  }

  @media ${breakpoints.lg} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px 10%;

    :nth-child(odd) {
      background: ${theme.secondary};
      box-shadow: 0px 0px 10px 0px #aa9c9d;

      .image-box {
        order: 1;
      }
    }

    .description-box {
      padding: 30px;
    }

  }

  .accordion-section{
    order: 3;
  }
`;
