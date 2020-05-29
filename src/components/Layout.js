// src/components/layout.js
import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from '../components/siteMetadata';
import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.css"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <section>
      <Header siteTitle={title} description={description} />
      <div className="site-main">
            <div className="site-content">
              {children}
            </div>
            </div>
        <Footer />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
