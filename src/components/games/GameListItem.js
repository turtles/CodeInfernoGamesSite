import React from 'react'
import Link from 'gatsby-link'

const ItemStyle = {
  minWidth: '10em',
  minHeight: '3em',
  width: '50%',
  padding: '1em',
}
const GameList = ({title}) => (
  <div style={ItemStyle}>
    <h3>{title}</h3>
  </div>
)


export default GameList
