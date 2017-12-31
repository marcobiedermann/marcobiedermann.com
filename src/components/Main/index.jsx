import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Main = props => (
  <main
    className="site__main"
    role="main"
    itemScope
    itemProp="mainContentOfPage"
  >
    {props.children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
