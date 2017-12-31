import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import menuIcon from '../../assets/images/menu.svg';
import xIcon from '../../assets/images/x.svg';

import './style.css';

const Navigation = props => (
  <div>
    <button
      className="navigation__button navigation__button--open js-toggle"
      data-target="#navigation--main"
    >
      <Icon>{menuIcon}</Icon>
    </button>

    <nav
      className="navigation navigation--main align"
      id="navigation--main"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <button
        className="navigation__button navigation__button--close js-toggle"
        data-target="#navigation--main"
      >
        <Icon>{xIcon}</Icon>
      </button>
      <ul>
        {props.pages.map(page => (
          <li key={page.id}>
            <Link
              activeClassName="is-active"
              itemProp="url"
              title={page.metaTitle}
              to={page.url}
            >
              <span itemProp="name">{page.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

Navigation.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    metaTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default Navigation;
