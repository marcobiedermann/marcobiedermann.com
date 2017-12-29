import React from 'react';
import Link from 'gatsby-link';

import './style.css';

const Header = () => (
  <header className="site__header" role="banner">
    <button
      className="navigation__button navigation__button--open js-toggle"
      data-target="#navigation--main"
    >
      <svg className="icon">
        <use xlinkHref="assets/images/icons.svg#menu" />
      </svg>
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
        <svg className="icon">
          <use xlinkHref="assets/images/icons.svg#x" />
        </svg>
      </button>
      <ul>
        <li>
          <Link
            activeClassName="is-active"
            itemProp="url"
            title="Marco Biedermann Homepage"
            to="/"
          >
            <span itemProp="name">Home</span>
          </Link>
        </li>
        <li>
          <Link
            activeClassName="is-active"
            itemProp="url"
            title="About Marco Biedermann"
            to="about"
          >
            <span itemProp="name">About</span>
          </Link>
        </li>
        <li>
          <Link
            activeClassName="is-active"
            itemProp="url"
            title="Projects I've been working on"
            to="projects"
          >
            <span itemProp="name">Work</span>
          </Link>
        </li>
        <li>
          <Link
            activeClassName="is-active"
            itemProp="url"
            title="Get in Contact with me"
            to="contact"
          >
            <span itemProp="name">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
