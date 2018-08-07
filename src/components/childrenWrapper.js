import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import particles from '../configs/particleconfig'

let colors = {
  mutedRed: '#f03856',
  darkBlue: '#082c4c',
}

const particleConfig = {
  particles: {
    number: {
      value: 38,
      density: {
        enable: false,
        value_area: 100,
      },
    },
  },
}

class ChildWrapper extends React.Component {
  constructor(props) {
    super(props)
    console.log(particles)
  }

  handleColorChange = newColor => {
    this.props.changebodycolor(newColor)
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={() => this.handleColorChange(colors.mutedRed)}>
          <div className="big second" params={particles.particles}>
            <Particles />
          </div>
        </Waypoint>

        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>

        <Waypoint onEnter={() => this.handleColorChange(colors.darkBlue)}>
          <div className="big first" />
        </Waypoint>
      </div>
    )
  }
}

export default ChildWrapper
