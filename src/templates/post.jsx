import React from 'react';

import Grid from '../components/Grid';
import Icon from '../components/Icon';
import Image from '../components/Image';
import Section from '../components/Section';

import facebookIcon from '../assets/images/facebook.svg';
import googlePlusIcon from '../assets/images/google-plus.svg';
import twitterIcon from '../assets/images/twitter.svg';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <article
      className="project text--center"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <Section>
        <Grid>
          <figure>
            <Image src={post.frontmatter.desktop} />
          </figure>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h1 itemProp="name">{post.frontmatter.title}</h1>
          <ul>
            {post.frontmatter.client && (
              <li>
                <strong>Client:</strong> {post.frontmatter.client}
              </li>
            )}
            {post.frontmatter.agency && (
              <li>
                <strong>Agency:</strong> {post.frontmatter.agency}
              </li>
            )}
            {post.frontmatter.role && (
              <li>
                <strong>Role:</strong> {post.frontmatter.role}
              </li>
            )}
          </ul>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h2>Colors</h2>
          <p>Bright and fresh colors</p>
          <figure>
            <Image src={post.frontmatter.colors} />
          </figure>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h2>Typography</h2>
          <p>
            The fonts are meant to be displayed on smartphone and display, the
            main focus: legibility.
          </p>
          <figure>
            <Image
              src={`content/images/projects/typography/${
                post.frontmatter.fonts
              }.png`}
            />
          </figure>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h2>Homepage</h2>
          <figure>
            <Image src={post.frontmatter.homepage} />
          </figure>
        </Grid>
      </Section>

      {post.frontmatter.tablet &&
        post.frontmatter.mobile && (
          <Section style={{ backgroundColor: post.frontmatter.color }}>
            <Grid>
              <figure>
                <Image src="content/images/projects/apple-devices.svg" />
              </figure>
            </Grid>
          </Section>
        )}

      {post.frontmatter.tablet && (
        <Section>
          <Grid>
            <h2>Tablet view</h2>
            <figure>
              <Image src={post.frontmatter.tablet} />
            </figure>
          </Grid>
        </Section>
      )}

      {post.frontmatter.mobile && (
        <Section>
          <Grid>
            <h2>Mobile view</h2>
            <p>With a small display comes great responsabilities</p>
            <figure>
              <Image src={post.frontmatter.mobile} />
            </figure>
          </Grid>
        </Section>
      )}

      <Section>
        <Grid>
          <p>
            <a
              href={post.frontmatter.website}
              className="button button--dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </p>
          <ul className="list--unstyled list--inline">
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.marcobiedermann.com/projects${
                  post.frontmatter.path
                }`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share ${post.frontmatter.title} project on Facebook`}
              >
                <Icon size="2x">{facebookIcon}</Icon>
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?text=${
                  post.frontmatter.title
                } Website&url=https://www.marcobiedermann.com/projects${
                  post.frontmatter.path
                }&via=m4120cb`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share ${post.frontmatter.title} project on Twitter`}
              >
                <Icon size="2x">{twitterIcon}</Icon>
              </a>
            </li>
            <li>
              <a
                href={`https://plus.google.com/share?url=https://www.marcobiedermann.com/projects${
                  post.frontmatter.path
                }`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share ${post.frontmatter.title} project on Google Plus`}
              >
                <Icon size="2x">{googlePlusIcon}</Icon>
              </a>
            </li>
          </ul>
        </Grid>
      </Section>
    </article>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        agency
        client
        color
        colors
        desktop
        fonts
        homepage
        mobile
        path
        role
        tablet
        title
        website
      }
    }
  }
`;

export default Template;
