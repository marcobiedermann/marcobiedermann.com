import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './style.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <div className="site__container">
      <main className="site__main" role="main" itemScope itemProp="mainContentOfPage">
        {children()}
      </main>
    </div>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
