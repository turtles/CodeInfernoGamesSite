import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ItemStyle = {
  minWidth: '10em',
  minHeight: '3em',
  width: '50%',
  padding: '1em',
}

const TitleStyle = {
  color: 'black'
}

export default ({title, subtitle, thumbnail}) => {
  return (
    <div style={ItemStyle}>
      <Img resolutions = {thumbnail} style={{margin:'0 0 1em 0'}} />
      <Link to="/games"
        style={TitleStyle}>
        <h3>{title}</h3>
      </Link>
      <p>{subtitle}</p>
    </div>
  );
}
