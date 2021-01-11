import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import About from '../components/about-page';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="About | Southwest Constructon Parts" />
      <About />
    </Layout>
  );
};

export default AboutPage;

// duotone: { highlight: "#ffffff", shadow: "#66339" }
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "home-cover-sign.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          quality: 80
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          quality: 80
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
