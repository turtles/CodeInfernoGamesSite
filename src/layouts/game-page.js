import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
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
        image1 {
          childImageSharp {
            sizes(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        image2 {
          childImageSharp {
            sizes(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        image3 {
          childImageSharp {
            sizes(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        directLink
        site
      }
    }
  }
`;
