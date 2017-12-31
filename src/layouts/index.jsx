import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './style.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';

const pages = [
  {
    id: 1,
    metaTitle: 'Marco Biedermann Homepage',
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    metaTitle: 'About Marco Biedermann',
    title: 'About',
    url: 'about',
  },
  {
    id: 3,
    metaTitle: 'Projects I’ve been working on',
    title: 'Projects',
    url: 'projects',
  },
  {
    id: 4,
    metaTitle: 'Get in Contact with me',
    title: 'Contact',
    url: 'contact',
  },
];

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
      <Navigation pages={pages} />
    </Header>

    <Main>{children()}</Main>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
