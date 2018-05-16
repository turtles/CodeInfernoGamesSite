import React from 'react'
import Link from 'gatsby-link'

import GameListItem from './GameListItem';

const ListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
}

export default ({data}) => {
  console.log(data);
  return (
    <div style={ListStyle}>
    </div>
  )
}
