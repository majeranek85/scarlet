import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';

const IndexPage = () => (
  <Layout className='layout-container'>
    <SEO title='Home' />
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;
