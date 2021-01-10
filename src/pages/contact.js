import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-page';

const ContactPage = ({ data }) => {
  // const sources = [
  //   data.mobileImage.childImageSharp.fluid,
  //   {
  //     ...data.desktopImage.childImageSharp.fluid,
  //     media: `(min-width: 768px)`,
  //   },
  // ];

  return (
    <Layout
      // image={sources}
      // imageTitle="Southwest Construction Parts Sign"
    >
      <SEO title="Contact | Southwest Constructon Parts" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

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
    contactJson {
      path
      phone
      email
      fax
      address
    }
  }
`
