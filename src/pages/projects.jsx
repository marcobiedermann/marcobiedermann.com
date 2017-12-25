import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';

const Page = () => (
  <div>
    <Helmet
      title="Projects"
      meta={[
        {
          name: 'description',
          content: 'Take a look at some of my projects I’ve been working on.',
        },
      ]}
    />
    <section className="site__section">
      <Grid>
        <h2>Work</h2>
        <p className="center-block">
          Take a look at some of my projects I’ve been working on.
        </p>
        PROJECTS
      </Grid>
    </section>
  </div>
);

export default Page;
