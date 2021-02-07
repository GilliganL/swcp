import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-page';
import Header from '../components/header';
import { H1, H2 } from '../components/heading';

const ContactPage = ({
  data: {
    contactJson: { address, email, fax, phone },
    contactImage,
  }
}) => (
  <Layout>
    <SEO title="Contact | Southwest Constructon Parts" />
    <Header>
      <H1 style={{ textAlign: 'center' }}>
        Contact us for quotes, special orders and general questions
      </H1>
      <H2>
        Serving New Mexico and Surrounding Communities
      </H2>
    </Header>
    <Contact
      address={address}
      email={email}
      fax={fax}
      image={getImage(contactImage)}
      phone={phone}
    />
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 166, width: 400, quality: 70, layout: CONSTRAINED, transformOptions: { cropFocus: ENTROPY })
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
