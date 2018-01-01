import React from 'react';
import PropTypes from 'prop-types';

import Project from '../Project';

import './style.css';

const Projects = props => (
  <ul className="projects">
    {props.projects.map(project => (
      <li>
        <Project {...project.node.frontmatter} />
      </li>
    ))}
  </ul>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf().isRequired,
};

export default Projects;
