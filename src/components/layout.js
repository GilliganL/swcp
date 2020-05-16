/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import HeaderImage from '../components/header-image';
import Footer from './footer';
import Header from './header';
import PhoneCTA from './phone-cta';
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"

const Layout = ({
  children, image, imageBackgroundColor, imageTitle,
}) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main>
        <HeaderImage
          image={image}
          imageBackgroundColor={imageBackgroundColor}
          imageTitle={imageTitle}
        />
        {children}
      </main>
      <PhoneCTA />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
