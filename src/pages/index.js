import React from 'react';
import Hero from '../components/sections/hero';
//import { Link } from "gatsby"

import Layout from '../components/layout/layout';
//import Image from "../components/image"
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout className='layout-container'>
    <SEO title='Home' />
    <Hero />
    <h1>HomePage</h1>
  </Layout>
);

export default IndexPage;
