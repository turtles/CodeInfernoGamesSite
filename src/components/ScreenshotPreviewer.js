import React from 'react'
import Img from 'gatsby-image'

const ListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '1em',
}

const ItemStyle = {
  minWidth: '10em',
  minHeight: '3em',
  width: '50%',
  padding: '1em',
}

const ScreenshotPreviewer = ({image1, image2, image3}) => (
  <div style={ListStyle}>
    <div style={ItemStyle}>
      <Img sizes={image1} />
    </div>
    <div style={ItemStyle}>
      <Img sizes={image2} />
    </div>
  </div>
)

export default ScreenshotPreviewer
