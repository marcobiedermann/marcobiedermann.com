import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';
import Icon from '../components/Icon';
import Section from '../components/Section';

import behanceIcon from '../assets/images/behance.svg';
import dribbbleIcon from '../assets/images/dribbble.svg';
import githubIcon from '../assets/images/github.svg';
import twitterIcon from '../assets/images/twitter.svg';

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
    <Section>
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
              <Icon size="2x">{twitterIcon}</Icon>
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <Icon size="2x">{dribbbleIcon}</Icon>
            </a>
          </li>
          <li>
            <a
              href="https://behance.net/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <Icon size="2x">{behanceIcon}</Icon>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/marcobiedermann"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <Icon size="2x">{githubIcon}</Icon>
            </a>
          </li>
        </ul>
      </Grid>
    </Section>
  </div>
);

export default Page;
