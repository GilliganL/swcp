/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from './footer';
import NavBar from './nav-bar';
import PhoneCTA from './phone-cta';
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>
      {children}
    </main>
    <PhoneCTA />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
