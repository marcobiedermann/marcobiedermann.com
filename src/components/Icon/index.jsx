import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const Icon = (props) => {
  const className = classNames({
    icon: true,
    [`icon--${props.size}`]: props.size,
  });

  return (
    <svg className={className}>
      <use xlinkHref={`#${props.children.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.shape.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: null,
};

export default Icon;
