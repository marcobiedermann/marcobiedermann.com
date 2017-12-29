import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

const Section = (props) => {
  const className = classNames({
    site__section: true,
    [`site__section--${props.modifier}`]: props.modifier,
  });

  return (
    <section className={className} {...props}>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.string,
};

Section.defaultProps = {
  children: null,
  modifier: '',
};

export default Section;
