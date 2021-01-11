import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { ContentBox50, ContentBox100 } from '../components/content-box';
import Image from '../components/image';
import { H1, H2, H3} from '../components/heading';
import P from '../components/paragraph';
import UL from '../components/list';
import PhoneLink from '../components/phone-link';
import useBreakpoints from '../hooks/use-breakpoints';
import styles from '../main_style.scss';

const IndexPage = ({ data, ...props}) => {
  const [breakpoint] = useBreakpoints();
  const sources = {
    mobile: data.mobileImage,
    tablet: data.tabletImage,
    desktop: data.desktopImage,
  };
  const { parts, brands, services, equipment } = data.homeJson

  return (
    <Layout>
      <SEO title="Southwest Constructon Parts" />
      <Header>
        <H1>{parts.title}</H1>
        <Image
          alt="Warehouse shelves with heavy equipment parts"
          image={sources[breakpoint]}
          placeholderClass={styles.heroPlaceholder}
        />
      </Header>
      <ContentBox50>
        <H3 style={{ textAlign: 'left' }}>Who We Are</H3>
        <P style={{ textAlign: 'left' }}>{parts.content}</P>
        <PhoneLink />
      </ContentBox50>
      <div style={{ height: breakpoint === 'desktop' ? '500px' : '400px', width: breakpoint === 'desktop' ? '50%' : '100%', background: '#fff', margin: '0 auto' }} />
      <ContentBox100>
        <H2>Parts We Carry</H2>
        <UL list={parts.list} />
      </ContentBox100>
      <ContentBox50>
        <H2>{equipment.title}</H2>
        <P>{equipment.content}</P>
      </ContentBox50>
      <ContentBox50>
        <H3>{equipment.subTitle}</H3>
        <P>{equipment.contentList}</P>
      </ContentBox50>
      <ContentBox100>
        <H2>{brands.title}</H2>
        <UL list={brands.list} />
      </ContentBox100>
      <ContentBox50>
        <Image
          alt="alt"
          image={data.servicesImage}
        />
      </ContentBox50>
      <ContentBox50>
        <H2>{services.title}</H2>
        <UL list={services.list} />
      </ContentBox50>
    </Layout>
  );
};

export default IndexPage
          // duotone: { highlight: "#f9f9f9", shadow: "#e06329" }
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "home-cover-sign-16x9-cropped.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxHeight: 300, quality: 70, layout: FLUID, placeholder: TRACED_SVG)
      }
    }
    tabletImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 768, maxHeight: 400, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG, transformOptions: { cropFocus: ENTROPY })
      }
    }
    desktopImage: file(relativePath: { eq: "home-cover-sign-16x9.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 1440, maxHeight: 600, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG, transformOptions: { cropFocus: ENTROPY })
      }
    }
    servicesImage: file(relativePath: { eq: "gaspar-manuel-zaldo-WH5Z6agFYbI-unsplash.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxHeight: 400, maxWidth: 400, quality: 70, layout: CONSTRAINED, placeholder: TRACED_SVG, transformOptions: { cropFocus: ENTROPY })
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
