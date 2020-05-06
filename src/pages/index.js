import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Panel from '../components/panel';

const IndexPage = ({ data, ...props}) => {
  console.log(props)
  console.log(data)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const { parts, brands, services } = data.homeJson

  return(
    <Layout
      image={sources}
      imageTitle="Southwest Construction Parts Sign"
    >
      <SEO title="Southwest Constructon Parts" />
      <Panel
        title={parts.title}
        content={parts.content}
        cta={parts.cta}
        list={parts.list}
      />
      <Panel
        title={brands.title}
        list={brands.list}
        theme="Blue"
      />
      <Panel
        image={data.servicesImage.childImageSharp.fluid}
        list={services.list}
        theme="Image"
        title={services.title}
      />
    </Layout>
  );
};

export default IndexPage

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
    servicesImage: file(relativePath: { eq: "gaspar-manuel-zaldo-WH5Z6agFYbI-unsplash.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 400
          quality: 80
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeJson {
      path
      parts {
        title
        content
        cta
        list
      }
      brands {
        title
        list
      }
      services {
        title
        list
      }
    }
  }
`