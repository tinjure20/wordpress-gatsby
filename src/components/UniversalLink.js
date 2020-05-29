//src/components/UniversalLink.js
//source:https://www.gatsbyjs.org/docs/gatsby-link/
// #reminder-use-link-only-for-internal-links
import React from "react"
import { Link as GatsbyLink } from "gatsby"

const UniversalLink = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
export default UniversalLink