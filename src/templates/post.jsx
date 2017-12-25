import React from 'react';

import Image from '../components/Image';
import Grid from '../components/Grid';

const Template = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <article
      className="project text--center"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <section className="site__section">
        <Grid>
          <figure>
            <Image src={post.frontmatter.desktop} />
          </figure>
        </Grid>
      </section>

      <section className="site__section">
        <Grid>
          <h1 itemProp="name">{post.frontmatter.title}</h1>
          <ul>
            <li>
              <strong>Client:</strong> {post.frontmatter.client}
            </li>
            <li>
              <strong>Agency:</strong> {post.frontmatter.agency}
            </li>
            <li>
              <strong>Role:</strong> {post.frontmatter.role}
            </li>
          </ul>
        </Grid>
      </section>

      <section className="site__section">
        <Grid>
          <h2>Colors</h2>
          <p>Bright and fresh colors</p>
          <figure>
            <Image src={post.frontmatter.colors} />
          </figure>
        </Grid>
      </section>

      <section className="site__section">
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
      </section>

      <section className="site__section">
        <Grid>
          <h2>Homepage</h2>
          <figure>
            <Image src={post.frontmatter.homepage} />
          </figure>
        </Grid>
      </section>

      <section
        className="site__section"
        style={{ backgroundColor: post.frontmatter.color }}
      >
        <Grid>
          <figure>
            <Image src="content/images/projects/apple-devices.svg" />
          </figure>
        </Grid>
      </section>

      <section className="site__section">
        <Grid>
          <h2>Tablet view</h2>
          <figure>
            <Image src={post.frontmatter.tablet} />
          </figure>
        </Grid>
      </section>

      <section className="site__section">
        <Grid>
          <h2>Mobile view</h2>
          <p>With a small display comes great responsabilities</p>
          <figure>
            <Image src={post.frontmatter.mobile} />
          </figure>
        </Grid>
      </section>

      <section className="site__section">
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
                <svg className="icon icon--2x">
                  <use xlinkHref="assets/images/icons.svg#facebook" />
                </svg>
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
                <svg className="icon icon--2x">
                  <use xlinkHref="assets/images/icons.svg#twitter" />
                </svg>
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
                <svg className="icon icon--2x">
                  <use xlinkHref="assets/images/icons.svg#google-plus" />
                </svg>
              </a>
            </li>
          </ul>
        </Grid>
      </section>
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
