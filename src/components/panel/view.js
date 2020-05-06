import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  content, cta, image, list, listSize, theme, title,
}) => (
  <section className={`${styles.panel} ${theme ? styles[`panel${theme}`] : ''}`}>
    <h2 className={styles.panelTitle}>{title}</h2>
    {content && <p className={styles.panelContent}>{content}</p>}
    {cta && <p className={styles.panelCta}>{cta}</p>}
    {list && (
      <ul className={`${styles.panelList} ${listSize === 'sm' && styles.panelList__sm}`}>
        {list.map((item) => (
          <li
            className={`${styles.panelListItem} ${listSize === 'sm' && styles.panelListItem__sm}`}
            key={item}
          >
            {_.startCase(item)}
          </li>
        ))}
      </ul>
    )}
    {image && (
      <Img
        backgroundColor
        fluid={image}
        style={{
          height: '200px',
          width: '200px',
        }}
      />
    )}
  </section>
);
PanelView.propTypes = {
  content: PropTypes.string,
  cta: PropTypes.string,
  image: PropTypes.object,
  list: PropTypes.array,
  theme: PropTypes.string,
  title: PropTypes.string.isRequired,
};
PanelView.defaultProps = {
  content: null,
  cta: null,
  image: null,
  list: null,
  theme: null,
};

export default PanelView;
