import React from 'react';
import PropTypes from 'prop-types';
import PanelView from './view';

const PanelContainer = ({ title, content, list }) => {
  return (
    <PanelView
      title={title}
      content={content}
      list={list}
    />
  )
};
PanelContainer.propTypes = {
  content: PropTypes.string,
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
};
PanelContainer.defaultProps = {
  content: null,
  list: null,
};

export default PanelContainer;
