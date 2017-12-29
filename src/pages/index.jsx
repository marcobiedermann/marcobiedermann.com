import React from 'react';
import Link from 'gatsby-link';

import Grid from '../components/Grid';
import Icon from '../components/Icon';
import Section from '../components/Section';

import arrowIcon from '../assets/images/arrow.svg';
import behanceIcon from '../assets/images/behance.svg';
import developmentIcon from '../assets/images/development.svg';
import dribbbleIcon from '../assets/images/dribbble.svg';
import githubIcon from '../assets/images/github.svg';
import graphicDesignIcon from '../assets/images/graphic-design.svg';
import optimizationIcon from '../assets/images/optimization.svg';
import twitterIcon from '../assets/images/twitter.svg';

const Page = () => (
  <div>
    <Section modifier="full">
      <Grid>
        <div itemScope itemType="http://schema.org/Person">
          <h1
            className="animate animate--delay animate--slideInUp"
            itemProp="name"
            style={{ letterSpacing: '1rem' }}
          >
            <span itemProp="givenName">Marco</span>{' '}
            <span itemProp="familyName">Bieder&shy;mann</span>
          </h1>
          <h3
            className="animate animate--delay animate--slideInUp"
            itemProp="jobTitle"
          >
            Frontend Web Developer & Graphic Designer
          </h3>
        </div>
        <Link
          className="scroll-down animate animate--infinite animate--upDown js-scroll-to"
          to="#about"
          title="Scroll down to about section"
        >
          <Icon>
            {arrowIcon}
          </Icon>
        </Link>
      </Grid>
    </Section>

    <Section id="about">
      <Grid>
        <h2 className="headline--lined">About</h2>
        <p className="center-block">
          My name is{' '}
          <span itemProp="name">
            <span itemProp="givenName">Marco</span>
          </span>{' '}
          and I am living in <span itemProp="nationality">Germany</span>. I love
          designing and developing rich web applications with user experience in
          mind. I like solving problems, designing clean interfaces and
          constantly being in move to learn new things.
        </p>

        <div className="grid__row">
          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {graphicDesignIcon}
              </Icon>
            </figure>

            <h3>Graphic Design</h3>
            <p>
              From the inital sketch and visualisation to the finished outcome,
              I craft creative solutions for all aspects of design. Starting
              with a prototype give you a quick look how the result might look
              and feel.
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {developmentIcon}
              </Icon>
            </figure>

            <h3>Web Development</h3>
            <p>
              I am using the latest web-technologies along with clean and well
              structured code to produce a seamless user experience. All my
              websites are coded with my bare hands from scratch.
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {optimizationIcon}
              </Icon>
            </figure>

            <h3>Optimization</h3>
            <p>
              I think it is important to optimize and further improve a site.
              Adding <abbr title="Search engine optimization">SEO</abbr>{' '}
              strategies and going for web performance are key features to
              provide a richt user experience and to make your visitors happy.
            </p>
          </div>
        </div>

        <p>
          <a
            className="button button--dark"
            href="about/"
            itemProp="url"
            title="More about me"
          >
            More about me
          </a>
        </p>
      </Grid>
    </Section>

    <Section modifier="dark">
      <Grid>
        <h2 className="headline--lined">Work</h2>
        <p className="center-block">
          Take a look at some of my projects I’ve been working on.
        </p>
        PROJECTS
        <p>
          <a
            className="button button--light"
            href="projects/"
            title="More of my project"
          >
            see more Work
          </a>
        </p>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <h2 className="headline--lined">Contact</h2>
        <p>Interested in working together? Get in touch with me.</p>

        <ul className="text--center list--inline list--unstyled">
          <li
            style={{
              listStyle: 'none',
              display: 'inline-block',
            }}
          >
            <link href="https://www.marcobiedermann.com" itemProp="url" />
          </li>
          <li>
            <a
              href="https://twitter.com/m412c0b"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              title="Marco Biedermann on twitter"
            >
              <Icon size="2x">
                {twitterIcon}
              </Icon>
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/marcobiedermann"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              title="Marco Biedermann on dribbble"
            >
              <Icon size="2x">
                {dribbbleIcon}
              </Icon>
            </a>
          </li>
          <li>
            <a
              href="https://behance.net/marcobiedermann"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              title="Marco Biedermann on behance"
            >
              <Icon size="2x">
                {behanceIcon}
              </Icon>
            </a>
          </li>
          <li>
            <a
              to="https://github.com/marcobiedermann"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              title="Marco Biedermann on github"
            >
              <Icon size="2x">
                {githubIcon}
              </Icon>
            </a>
          </li>
        </ul>
      </Grid>
    </Section>
  </div>
);

export default Page;
