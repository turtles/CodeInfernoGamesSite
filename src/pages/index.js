import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome</h1>
    <p>Welcome to Code Inferno Games! I'm a game developer (who sometimes works with artists!) with an interest in building challenging casual games.</p>
    <p>Currently, no games are being actively developed, but that may change in the future.</p>
    <p>This site includes an archive of all games released under this moniker, <Link to="/games/">so check them out!</Link></p>
  </div>
)

export default IndexPage
