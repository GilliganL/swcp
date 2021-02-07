import React from 'react';
import { graphql } from 'gatsby';
import { getImage, useArtDirection } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePage from '../components/home-page';

const IndexPage = ({
  data: {
    desktopImage,
    homeJson: {
      brands,
      equipment,
      parts,
      services,
    },
    mobileImage,
    servicesImage,
    tabletImage,
  },
}) => {
  const serviceImage = getImage(servicesImage);
  const images = useArtDirection(getImage(desktopImage), [
    {
      media: "(max-width: 1280px)",
      image: getImage(tabletImage),
    },
    {
      media: "(max-width: 768px)",
      image: getImage(mobileImage),
    }
  ])
  return (
    <Layout>
      <SEO title="Southwest Constructon Parts" />
      <HomePage
        brands={brands}
        equipment={equipment}
        images={images}
        parts={parts}
        services={services}
        servicesImage={serviceImage}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "home-cover-sign-16x9-cropped.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 70, layout: FULL_WIDTH)
      }
    }
    tabletImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 768, height: 400, quality: 70, layout: CONSTRAINED, transformOptions: { cropFocus: ENTROPY })
      }
    }
    desktopImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1440, height: 600, quality: 70, layout: CONSTRAINED, transformOptions: { cropFocus: ENTROPY })
      }
    }
    servicesImage: file(relativePath: { eq: "loader.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 320, width: 400, quality: 70, layout: CONSTRAINED, transformOptions: { cropFocus: ENTROPY })
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
      equipment {
        title
        subTitle
        content
        contentList
      }
    }
  }
`
