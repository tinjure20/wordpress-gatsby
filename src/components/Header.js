import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useSiteMetadata from '../components/siteMetadata';
import Menu from "./Menu"
import "../styles/header.css"

const Header = () =>{
  const { title } = useSiteMetadata();
  
  return (
    <header className="header">
        <div className="nav-container brand">
          <Link  to="/"> {title} </Link>
          {/* Menu here */}
          <Menu />
        </div>   
    </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}

export default Header
