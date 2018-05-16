import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h6 style={{ margin: 0 }}>
        (c) 2012-{new Date().getFullYear()}
      </h6>
    </div>
  </div>
)


export default Footer
