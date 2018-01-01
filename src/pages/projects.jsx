import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';
import Projects from '../components/Projects';
import Section from '../components/Section';

const Page = ({ data }) => {
  const { allMarkdownRemark: posts } = data;

  return (
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
      <Section>
        <Grid>
          <h2>Work</h2>
          <p className="center-block">
            Take a look at some of my projects I’ve been working on.
          </p>
          <Projects projects={posts.edges} />
        </Grid>
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            thumbnail
            title
          }
        }
      }
    }
  }
`;

export default Page;
