import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import DesktopCategories from '../components/features/desktopCategories';
import Accordion from '../components/features/accordion';
import { breakpoints } from '../utils/breakpoints';

const CategoryPage = ({pageContext: { slug }, data: { category }}) => {
  return (
    <Layout key={slug}>
      <SEO title={category.title} />
      <StyledContainer>
        <aside>
          <DesktopCategories/>
        </aside>
        <div className='subpage-wrapper'>
          <PageTitle title={category.title} />
          <StyledItems>

              {
                category.treatments.map( item => (
                  <div key={item.slug}>
                    <h4>{item.name}</h4>
                    <div dangerouslySetInnerHTML={{__html: item.descriptionNode.childMarkdownRemark.html}}/>
                    <Accordion
                      title='czytaj więcej'
                      content={item.effectsNode.childMarkdownRemark.html}
                    />
                  </div>
                ))
              }

          </StyledItems>
        </div>
      </StyledContainer>
    </Layout>

  )
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin:  auto;
  width: 100%;
  padding: 0 10px;


  @media ${breakpoints.md} {


    aside {
      flex: 0 0 100%;
    }

    .subpage-wrapper {
      padding: 0 20px;
    }

  }

  @media ${breakpoints.lg} {
    background: transparent;
    width: 80%;
    flex-direction: row;
    margin: 50px auto  50px auto;

    aside {
      flex: 1;
    }

    .subpage-wrapper {
      flex: 3;
    }
  }
`;

const StyledItems = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  flex: 1;

  div {
    margin-bottom: 10px;
  }
`;

export const query = graphql`
  query CategoryPageQuery($slug: String) {
    category: datoCmsCategory (slug: {eq: $slug}) {
      id,
      slug
      title
      treatments {
        name
        effectsNode {
          childMarkdownRemark {
            html
          }
        }
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default CategoryPage;