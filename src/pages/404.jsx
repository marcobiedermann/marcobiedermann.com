import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';
import Section from '../components/Section';

const Page = () => (
  <div>
    <Helmet
      title="404 - Page not found"
      meta={[
        {
          name: 'description',
          content: 'Error 404 - Page not found',
        },
      ]}
    />
    <Section>
      <Grid>
        <h1>Error 404 - Page not found</h1>
        <p>
          The requested page could not be found.<br />Go back to{' '}
          <Link to="/">Home page</Link>
        </p>
      </Grid>
    </Section>
  </div>
);

export default Page;
