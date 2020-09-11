//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from "./desktopNav"
import MobileNavMenu from "./mobileNav"


const Header = ({ siteTitle }) => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
