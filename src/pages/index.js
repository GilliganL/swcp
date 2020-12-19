import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Panel from '../components/panel';
import HeaderImage from '../components/header-image';
import H1 from '../components/heading/h1';
import H2 from '../components/heading/h2';
import H3 from '../components/heading/h3';
import P from '../components/paragraph';
import List from '../components/list';
import Column from '../components/panel-column';
import PhoneLink from '../components/phone-link';
import PanelImage from '../components/panel-image';

const IndexPage = ({ data, ...props}) => {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const { parts, brands, services, equipment } = data.homeJson

  return (
    <Layout>
      <SEO title="Southwest Constructon Parts" />
        <H1 style={{ textAlign: 'left'}}>{parts.title}</H1>
          <HeaderImage
            image={sources}
            imageTitle="Southwest Construction Parts Sign"
          />
        <Panel columns>
          <div style={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <H3 style={{ textAlign: 'left' }}>Some Heading Here?</H3>
            <P style={{ textAlign: 'left' }}>{parts.content}</P>
            <PhoneLink />
          </div>
          <div style={{ height: '500px', width: '50%', background: '#fff' }} />
        </Panel>
        <Panel columns>
          <div style={{ height: '500px', width: '50%', background: '#fff' }} />
          <div style={{ height: '500px', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <H2>Some Heading Here</H2>
            <List list={parts.list} />
          </div>
        </Panel>
        <Panel>
          <H2>{brands.title}</H2>
          <List list={brands.list} />
        </Panel>
        <Panel columns>
          <Column>
            <H2 style={{ textAlign: 'center' }}>{equipment.title}</H2>
            <P style={{ textAlign: 'center', margin: '0 auto' }}>{equipment.content}</P>
          </Column>
          <Column>
            <H3>{equipment.subTitle}</H3>
            <P style={{ textAlign: 'left' }}>{equipment.contentList}</P>
          </Column>
        </Panel>
        <PanelImage
          image={data.servicesImage.childImageSharp.fluid}
        >
          <H2>{services.title}</H2>
          <List list={services.list} />
        </PanelImage>
    </Layout>
  );
};

export default IndexPage

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
          maxWidth: 1400
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
          duotone: { highlight: "#f9f9f9", shadow: "#e06329" }
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
