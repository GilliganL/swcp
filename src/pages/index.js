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
  const { parts } = data.homeJson

  return(
    <Layout
      image={sources}
      imageTitle="Southwest Construction Parts Sign"
    >
      <SEO title="Southwest Constructon Parts" />
      <Panel
        title={parts.title}
        content={parts.content}
        list={parts.list}
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
    homeJson {
      path
      parts {
        title
        content
        list
      }
    }
  }
`