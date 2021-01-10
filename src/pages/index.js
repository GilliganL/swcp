import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { PanelView50, PanelView100 } from '../components/content-box';
import Image from '../components/image';
import { H1, H2, H3} from '../components/heading';
import P from '../components/paragraph';
import UL from '../components/list';
import PhoneLink from '../components/phone-link';

const IndexPage = ({ data, ...props}) => {
  const sources = [
    data.mobileImage,
    data.desktopImage,
  ];
  const { parts, brands, services, equipment } = data.homeJson

  return (
    <Layout>
      <SEO title="Southwest Constructon Parts" />
      <Header>
        <H1>{parts.title}</H1>
        <Image
          image={sources[1]}
          alt="Warehouse shelves with heavy equipment parts"
          title="Southwest Construction Parts Sign and Warehouse"
        />
      </Header>
      <PanelView50>
        <H3 style={{ textAlign: 'left' }}>Who We Are</H3>
        <P style={{ textAlign: 'left' }}>{parts.content}</P>
        <PhoneLink />
      </PanelView50>
      <div style={{ height: '500px', width: '50%', background: '#fff', margin: '0 auto' }} />
      <PanelView100>
        <H2>Parts We Carry</H2>
        <UL list={parts.list} />
      </PanelView100>
      <PanelView50>
        <H2>{equipment.title}</H2>
        <P>{equipment.content}</P>
      </PanelView50>
      <PanelView50>
        <H3>{equipment.subTitle}</H3>
        <P>{equipment.contentList}</P>
      </PanelView50>
      <PanelView100>
        <H2>{brands.title}</H2>
        <UL list={brands.list} />
      </PanelView100>
      <PanelView50>
        <Image
          alt="alt"
          image={data.servicesImage}
        />
      </PanelView50>
      <PanelView50>
        <H2>{services.title}</H2>
        <UL list={services.list} />
      </PanelView50>
    </Layout>
  );
};

export default IndexPage
          // duotone: { highlight: "#f9f9f9", shadow: "#e06329" }
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "home-cover-sign.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 768, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
    desktopImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 1440, maxHeight: 600, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG, transformOptions: { cropFocus: ENTROPY })
      }
    }
    servicesImage: file(relativePath: { eq: "gaspar-manuel-zaldo-WH5Z6agFYbI-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 400, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG)
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
