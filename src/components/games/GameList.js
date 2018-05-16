import React from 'react'
import Link from 'gatsby-link'

import GameListItem from './GameListItem';

const ListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
}

const GameList = () => (
  <div style={ListStyle}>
    <GameListItem />
    <GameListItem />
    <GameListItem />
    <GameListItem />
  </div>
)


export default GameList
