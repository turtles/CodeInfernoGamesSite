import React from 'react'
import Link from 'gatsby-link'

import Nav from './Nav';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1em',
    }}
  >
    <div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
    <Nav/>
  </div>
)


export default Header
