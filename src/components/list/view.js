import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import _ from 'lodash';

const View = ({ list }) => (
  <ul
    className={`
      ${styles.list}
      ${list.length < 6 ? styles.list__sm : ''}
    `}
  >
    {list.map((item) => (
      <li
        className={`${styles.listItem} ${list.length < 6 ? styles.listItem__sm : ''}`}
        key={item}
      >
        {_.startCase(item)}
      </li>
    ))}
  </ul>
);
View.propTypes = {
  list: PropTypes.array.isRequired,
};

export default View;
