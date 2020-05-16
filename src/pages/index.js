import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Panel from '../components/panel';
import H2 from '../components/heading2';
import H3 from '../components/heading3';
import P from '../components/paragraph';
import List from '../components/list';
import Column from '../components/panel-column';
import PanelImage from '../components/panel-image';
import useBreakpoints from '../hooks/use-breakpoints';

const IndexPage = ({ data, ...props}) => {
  const [breakpoint] = useBreakpoints();
  console.log(breakpoint)
  
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const { parts, brands, services, equipment } = data.homeJson

  return (
    <Layout
      image={sources}
      imageTitle="Southwest Construction Parts Sign"
    >
      <SEO title="Southwest Constructon Parts" />
        <Panel>
          <H2 title={parts.title} />
          <P content={parts.content} />
          <List list={parts.list} />
        </Panel>
        <Panel theme="Blue">
          <H2 title={brands.title} />
          <List list={brands.list} />
        </Panel>
        <Panel columns>
          <Column>
            <H2 title={equipment.title} />
            <P content={equipment.content} style={{ textAlign: 'left' }} />
            </Column>
          <Column>
            <H3 subTitle={equipment.subTitle} />
            <P content={equipment.contentList} style={{ textAlign: 'left' }} />
          </Column>
        </Panel>
        <PanelImage
          image={data.servicesImage.childImageSharp.fluid}
        >
          <H2 title={services.title} />
          <List list={services.list} />
        </PanelImage>
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
          duotone: { highlight: "#ff6506", shadow: "#f9f9f9" }
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
      equipment {
        title
        subTitle
        content
        contentList
      }
    }
  }
`
