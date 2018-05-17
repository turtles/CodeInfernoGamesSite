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
              thumbnail={frontmatter.thumbnail.childImageSharp.resolutions}
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
          thumbnail {
            childImageSharp {
              resolutions(width: 380, height: 290) {
                ...GatsbyImageSharpResolutions_noBase64
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
