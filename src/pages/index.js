import React from 'react';
import Hero from '../components/hero';
//import { Link } from "gatsby"

import Layout from '../components/layout';
//import Image from "../components/image"
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <h1>HomePage</h1>
  </Layout>
);

export default IndexPage;
