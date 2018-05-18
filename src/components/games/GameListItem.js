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

const InnerTitleStyle = {
  marginBottom: '0.4em'
}

const SubtitleStyle = {
  marginBottom: '0.4em'
}
const DateStyle = {
  marginBottom: '0.25em'
}

export default ({title, subtitle, thumbnail, slug, date, directLink, site}) => {
  return (
    <div style={ItemStyle}>
      <Img
        sizes = {thumbnail}
        style={{margin:'0 0 1em 0'}}
        />
      <h6 style={DateStyle}>{date}</h6>
      <Link to={slug} style={TitleStyle}>
        <h3 style={InnerTitleStyle}>{title}</h3>
      </Link>
      <p style={SubtitleStyle}>{subtitle}</p>
      <div style={{display:'flex'}}>
        <div style={{flexGrow: '1'}}>
          <Link to={slug}>More Details</Link>
        </div>
        <div style={{flexGrow: '1'}}>
          <a href={directLink}>Play Now ({site})</a>
        </div>
      </div>
    </div>
  );
}
