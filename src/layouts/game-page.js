import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  const {frontmatter} = post;
  return (
    <div>
      <h6>Released on {frontmatter.date} (YMD)</h6>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div>
        <a href={frontmatter.directLink} target="_blank" rel="noopener">
          Play on {frontmatter.site}
        </a>
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        directLink
        site
      }
    }
  }
`;
