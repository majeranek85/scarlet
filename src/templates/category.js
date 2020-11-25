import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
//import DesktopCategories from '../components/features/desktopCategories';
import styled from 'styled-components';

const CategoryPage = ({pageContext: { slug }, data: { category }}) => {
  return (
    <Layout key={slug}>
      <SEO title={category.title} />
      <StyledContainer>
        <PageTitle title={category.title} />
        <StyledItems>

          <React.Fragment>
            {
              category.treatments.map( item => (
                <div key={item.slug}>
                  <h3>{item.name}</h3>
                  <div dangerouslySetInnerHTML={{__html: item.descriptionNode.childMarkdownRemark.html}}/>
                  <div dangerouslySetInnerHTML={{__html: item.effectsNode.childMarkdownRemark.html}}/>
                </div>
              ))
            }
          </React.Fragment>

        </StyledItems>
      </StyledContainer>
    </Layout>

  )
}

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