import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"




const IndexPage = ({ data, ...props}) => {
  console.log(data)
  console.log(props)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return(
    <Layout
      image={sources}
      imageTitle="Southwest Construction Parts Sign"
    >
      <SEO title="Southwest Constructon Parts" />
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
  }
`