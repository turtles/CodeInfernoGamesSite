import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

<<<<<<< HEAD
=======
import Header from '../components/header'
import Footer from '../components/footer'
import ScreenshotPreviewer from '../components/ScreenshotPreviewer'
>>>>>>> 376ccd168890f3008ed4319c92df049d86ba6f30
import './index.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  const {frontmatter} = post;
  return (
    <div>
      <h6>Released on {frontmatter.date} (YMD)</h6>
      <h1>{frontmatter.title}</h1>
      <ScreenshotPreviewer
        image1={frontmatter.image1.sharp1.sizes}
        image2={frontmatter.image2.sharp2.sizes}
      />
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
        image1 {
          sharp1: childImageSharp {
            sizes(maxWidth: 400, maxHeight: 300, cropFocus: CENTER, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        image2 {
          sharp2: childImageSharp {
            sizes(maxWidth: 400, maxHeight: 300, cropFocus: CENTER, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
