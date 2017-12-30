import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './style.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Marco Biedermann | Frontend Webdeveloper & Graphic Designer"
      meta={[
        {
          name: 'description',
          content:
            'My name is Marco and I am living in Germany. I love designing and developing rich web applications with user experience in mind.',
        },
      ]}
    />
    <Header>
      <Navigation />
    </Header>

    <div className="site__container">
      <main
        className="site__main"
        role="main"
        itemScope
        itemProp="mainContentOfPage"
      >
        {children()}
      </main>
    </div>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
