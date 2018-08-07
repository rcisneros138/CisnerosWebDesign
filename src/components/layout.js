import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import SiteStructure from './siteWrapper'
import './layout.css'

let colors = {
  mutedRed: '#f03856',
  darkBlue: '#082c4c',
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.changeBodyColor = this.changeBodyColor.bind(this)
    this.state = { bodyColor: colors.mutedRed }
  }

  componentWillMount() {
    const { children } = this.props
    this.childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        changebodycolor: this.changeBodyColor,
        bodycolor: this.state.bodyColor,
      })
    )
  }
  componentDidMount() {
    document.body.style.backgroundColor = this.state.bodyColor
    document.body.style.transition = '1s'
  }

  componentWillReceiveProps() {}

  componentDidUpdate() {
    document.body.style.backgroundColor = this.state.bodyColor
  }

  changeBodyColor = newColor => {
    this.setState({ bodyColor: newColor })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <SiteStructure>
              <Header
                siteTitle={data.site.siteMetadata.title}
                bannerColor={this.state.bodyColor}
                changeColor={this.changeBodyColor}
              />
              {/* <div>
                {React.Children.Map(children, child =>
                  React.cloneElement(child, { ...this.state.bodyColor })
                )}
              </div> */}
              <div>{this.childrenWithProps}</div>
            </SiteStructure>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
