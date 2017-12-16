import React from 'react';
import Link from 'gatsby-link';

import Grid from '../Grid';

import './style.css';

const Footer = () => (
  <footer className="site__footer text--center" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">

    <Grid>

      <p className="site__footer__copyright">Handcrafted with <svg className="icon"><use xlinkHref="assets/images/icons.svg#heart" /></svg> in Germany</p>

      <nav className="navigation navigation--footer navigation--inline">
        <ul>
          <li>
            <Link to="imprint" title="Imprint">Imprint</Link>
          </li>
          <li>
            <Link to="privacy-policy" title="Privacy Policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>

    </Grid>

  </footer>
);

export default Footer;
