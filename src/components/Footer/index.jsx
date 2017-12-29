import React from 'react';
import Link from 'gatsby-link';

import Grid from '../Grid';
import Icon from '../Icon';

import heartIcon from '../../assets/images/heart.svg';

import './style.css';

const Footer = () => (
  <footer
    className="site__footer text--center"
    itemScope
    itemType="http://schema.org/WPFooter"
    role="contentinfo"
  >
    <Grid>
      <p className="site__footer__copyright">
        Handcrafted with <Icon>{heartIcon}</Icon> in Germany
      </p>

      <nav className="navigation navigation--footer navigation--inline">
        <ul>
          <li>
            <Link
              activeClassName="is-active"
              title="Imprint"
              to="imprint"
            >
              Imprint
            </Link>
          </li>
          <li>
            <Link
              activeClassName="is-active"
              title="Privacy Policy"
              to="privacy-policy"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </Grid>
  </footer>
);

export default Footer;
