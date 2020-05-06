import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PanelView from './view';

const PanelContainer = ({
  title, content, cta, list, theme, image,
}) => {
  const [listSize, setListSize] = useState();

  useEffect(() => {
    const { length } = list;
    if (length < 6) setListSize('sm');
    else setListSize('lg');
  }, [list]);

  return (
    <PanelView
      title={title}
      content={content}
      cta={cta}
      image={image}
      list={list}
      listSize={listSize}
      theme={theme}
    />
  )
};
PanelContainer.propTypes = {
  content: PropTypes.string,
  cta: PropTypes.string,
  image: PropTypes.object,
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
};
PanelContainer.defaultProps = {
  content: null,
  cta: null,
  image: null,
  list: null,
  theme:null,
};

export default PanelContainer;
