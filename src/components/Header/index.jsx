import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = props => (
  <header className="site__header" role="banner">
    {props.children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
