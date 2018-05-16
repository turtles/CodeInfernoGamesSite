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
          const {frontmatter} = game;

          return (
            <GameListItem
              title={frontmatter.title}
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
          title
          date
        }
      }
    }
  }
}
`
