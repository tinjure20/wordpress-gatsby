//src/components/footer.js
import React from "react"
import "../styles/footer.css"

const Footer = ()  => {
  return (
  <section className="footer-area">
  <div className="footer-text">
    © {new Date().getFullYear()} | This site is Powered by
          {` `}
    <a href="https://www.gatsbyjs.org">GatsbyJS</a> & <a href="https://www.wordpress.org">WordPress</a>.
  </div>
  </section>
  )
}
export default Footer