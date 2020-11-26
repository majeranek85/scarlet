import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from '../components/common/pageTitle';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
//import DesktopCategories from '../components/features/desktopCategories';
import styled from 'styled-components';
import DesktopCategories from '../components/features/desktopCategories';

const CategoryPage = ({pageContext: { slug }, data: { category }}) => {
  return (
    <Layout key={slug}>
      <SEO title={category.title} />
      <StyledContainer>
      <PageTitle title={category.title} />
        <aside>
          <DesktopCategories/>
        </aside>
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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;

  header  {
    flex: 0 0 100%;
  }

  aside nav ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 0;
    
    li  {
      margin-bottom: 50px;

      .image-box {
        height: 100px;
        border-radius: 5px;
      }
    }
  }

`;

const StyledItems = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  flex: 1;
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