import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';

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
    <section className="site__section">

      <Grid>

        <h1>Error 404 - Page not found</h1>
        <p>The requested page could not be found.<br />Go back to <Link to="/">Home page</Link></p>

      </Grid>

    </section>
  </div>
);

export default Page;
