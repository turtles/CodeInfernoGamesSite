import React from 'react'
import Link from 'gatsby-link'

import GameListItem from '../components/games/GameListItem';

const ListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const GamesPage = ({data}) => {
  const { edges: games } = data.allMarkdownRemark;
  return (
    <div>
      <h1>All Games</h1>
      <div style={ListStyle}>
      {
        games.map(({node: game})=> {
          const {frontmatter, fields} = game;
          return (
            <GameListItem
              key={frontmatter.title}
              thumbnail={frontmatter.image1.childImageSharp.sizes}
              title={frontmatter.title}
              subtitle={frontmatter.subtitle}
              slug={fields.slug}
              directLink={frontmatter.directLink}
              site={frontmatter.site}
              date={frontmatter.date}
            />
          );
        })
      }
      </div>
    </div>
  );
};

export default GamesPage;

export const gamesQuery = graphql`
query GamesQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        frontmatter {
          image1 {
            childImageSharp {
              sizes(maxWidth: 800, maxHeight: 600, cropFocus: CENTER, quality: 80, toFormat: JPG) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          title
          subtitle
          date
          directLink
          site
        }
        fields {
          slug
        }
      }
    }
  }
}
`
