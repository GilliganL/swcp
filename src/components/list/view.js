import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import _ from 'lodash';

const View = ({ length, list, maxHeight }) => (
  <ul
    className={`${styles.list} ${length < 6 && styles.list__sm}`}
    style={length >= 6 ? { maxHeight } : {}}
  >
    {list.map((item) => (
      <li
        className={`${styles.listItem} ${length < 6 && styles.listItem__sm}`}
        key={item}
      >
        {_.startCase(item)}
      </li>
    ))}
  </ul>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
