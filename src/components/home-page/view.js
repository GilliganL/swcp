import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Header from '../header';
import { ContentBox50, ContentBox100 } from '../content-box';
import { H1, H2, H3} from '../heading';
import P from '../paragraph';
import UL from '../list';
import PhoneLink from '../phone-link';
import styles from './styles.module.scss';

const IndexPage = ({
  brands,
  equipment,
  images,
  parts,
  services,
  servicesImage,
}) => (
  <>
    <Header>
      <H1>{parts.title}</H1>
      <H2 style={{ textAlign: 'left' }}>
        Serving New Mexico and Surrounding Communities
      </H2>
      <GatsbyImage
        alt="Warehouse shelves with heavy equipment parts"
        className={styles.heroPlaceholder}
        image={images}
        loading="eager"
      />
    </Header>
    <main className={styles.home__main}>
      <ContentBox100>
        <H3 style={{ textAlign: 'left' }}>Who We Are</H3>
        <P style={{ textAlign: 'left', maxWidth: '100%' }}>{parts.content}</P>
        <PhoneLink>
          Call for a quote today
        </PhoneLink>
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
        <H2>This is just a small sample of the construction parts we offer.</H2>
        <UL list={parts.list} />
        <PhoneLink style={{ margin: '60px auto 0' }}>
          Call us to inquire about specific equipment needs.
        </PhoneLink>
      </ContentBox100>
      <ContentBox100>
        <H2>{brands.title}</H2>
        <UL list={brands.list} />
      </ContentBox100>
      <ContentBox50>
        <GatsbyImage
          alt="alt"
          aspectRatio={4/5}
          className={styles.servicesImage}
          image={servicesImage}
        />
      </ContentBox50>
      <ContentBox50>
        <H2>{services.title}</H2>
        <UL list={services.list} />
      </ContentBox50>
    </main>
  </>
);

export default IndexPage;
