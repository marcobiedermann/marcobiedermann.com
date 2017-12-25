import lozad from 'lozad';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Image extends Component {
  componentDidMount() {
    const observer = lozad();

    observer.observe();
  }

  render() {
    const { props } = this;

    return (
      <picture>
        <source
          data-srcset=""
          type="image/webp"
        />
        <img
          alt={props.alt}
          className="lozad"
          data-src={props.src}
          height={props.height}
          width={props.width}
        />
      </picture>
    );
  }
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  height: null,
  width: null,
};

export default Image;
