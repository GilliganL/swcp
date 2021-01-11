import React from 'react';
import PropTypes from 'prop-types';
import { H1, H2 } from '../heading';
import P from '../paragraph';
import styles from './styles.module.scss';

const View = () => (
  <div className={styles.wrapper}>
    <H1>
      About Us
    </H1>
    <P pClass={styles.paragraph}>
      If you are like most contractors, you are looking for proven ways to trim expenses. We can help! We are an independent dealer of wear parts and components for most makes of heavy equipment. We stock parts to fit equipment from Cat scrapers to Bobcat skidsteers, pavers to trenchers and loaders to excavators. We have replacement parts for Barber - Greene, Blaw Knox, Broce, Case, Cat, Deere, Komatsu, Volvo, and many others.
    </P>
    <P pClass={styles.paragraph}>
      Based in Albuquerque, our sales personnel travel throughout New Mexico delivering cutting edges, bucket teeth, milling bits, rubber tracks and undercarriage to name a few. We are authorized dealers for Black Cat Blades, Bucyrus Blades, ESCO, H-E Parts, ITR/Metaris, Kennametal, Pengo and other quality manufacturers. These are factory new parts backed with warranties by the suppliers. We have most of the common parts in stock at our Albuquerque location and can ship or deliver to your locations.
    </P>
    <P pClass={styles.paragraph}>
      In addition, we belong to a network of dealers across North America that can locate used, rebuilt and new components including pins, bushings, cylinders, engines, transmissions, turbos, floor and equipment attachments such as forks and buckets.
    </P>
    <P pClass={styles.paragraph}>
      Please give us a call and see for yourself how we can support your business. Hundreds of other contractors and government agencies already are benefitting from the quality customer service we offer. We look forward to working with you!
    </P>
    <H2 h2Class={styles.subtitle}>
      Serving New Mexico and Surrounding Communities
    </H2>
  </div>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
