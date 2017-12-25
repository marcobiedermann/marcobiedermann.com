import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';

const Page = () => (
  <div>
    <Helmet
      title="Contact"
      meta={[
        {
          name: 'description',
          content: 'Interested in working together? Get in touch with me.',
        },
      ]}
    />
    <section className="site__section">
      <Grid>
        <h1>Contact</h1>
        <p>Interested in working together? Get in touch with me.</p>

        <ul className="list--inline list--unstyled">
          <link itemProp="url" href="http://www.marcobiedermann.com" />
          <li>
            <a
              href="https://twitter.com/m412c0b"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#twitter" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#dribbble" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://behance.net/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#behance" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#github" />
              </svg>
            </a>
          </li>
        </ul>
      </Grid>
    </section>
  </div>
);

export default Page;
