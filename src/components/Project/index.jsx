import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Image from '../Image';

import './style.css';

const Project = props => (
  <article
    className="project"
    itemScope=""
    itemType="http://schema.org/CreativeWork"
  >
    <figure>
      <Link to={props.path} itemprop="url">
        <Image src={props.desktop} alt="" />
        <figcaption>
          <div className="project__caption">
            <h3 className="project__title" itemProp="name">
              {props.title}
            </h3>
          </div>
        </figcaption>
      </Link>
    </figure>
  </article>
);

Project.propTypes = {
  desktop: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Project;
