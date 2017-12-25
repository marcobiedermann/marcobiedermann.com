import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const Embed = (props) => {
  const className = classNames({
    embed: true,
    [`embed--${props.ratio}`]: props.ratio,
  });

  return <div className={className}>{props.children}</div>;
};

Embed.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.string,
};

Embed.defaultProps = {
  ratio: '',
};

export default Embed;
