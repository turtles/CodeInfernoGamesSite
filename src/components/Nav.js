import React from 'react'
import Link from 'gatsby-link'

const NavLinkStyle = {
  color: 'black',
  margin: '0 0.5rem',
};

const Nav = () => (
  <div
    style={{
      background: 'AliceBlue',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
      }}
    >
      <Link to='/' style={NavLinkStyle}>Home</Link>
      <Link to='/games' style={NavLinkStyle}>Games</Link>
    </div>
  </div>
)

export default Nav
