import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ItemStyle = {
  minWidth: '10em',
  minHeight: '3em',
  width: '50%',
  padding: '1em',
}

export default ({title, subtitle, thumbnail}) => {
  return (
    <div style={ItemStyle}>
      <Img resolutions = {thumbnail} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}
