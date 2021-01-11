import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact-page';
import { H1, H2 } from '../components/heading';

const ContactPage = ({ data }) => {
  const { address, email, fax, phone } = data.contactJson;
  return (
    <Layout>
      <SEO title="Contact | Southwest Constructon Parts" />
      <H1>
        Contact us for quotes, special orders and general questions
      </H1>
      <H2>
        Serving New Mexico and Surrounding Communities
      </H2>
      <Contact
        address={address}
        email={email}
        fax={fax}
        phone={phone}
      />
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    contactJson {
      path
      phone
      email
      fax
      address
    }
  }
`
