import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PanelView = ({ content, list, title }) => (
  <section className={styles.panel}>
    <h2 className={styles.panelTitle}>{title}</h2>
    {content && <p className={styles.panelContent}>{content}</p>}
    {list && (
      <ul className={styles.panelList}>
        {list.map((item) => (
          <li className={styles.panelListItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    )}
  </section>
);
PanelView.propTypes = {
  content: PropTypes.string,
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
};
PanelView.defaultProps = {
  content: null,
  list: null,
};

export default PanelView;
