import React from 'react'
import styled from 'styled-components'

const SiteStrucure = styled.div`
  display: grid;
  grid-template-areas:
    'header  header'
    'cont1   cont1'
    'cont2   cont2'
    'cont3   cont3'
    'foot    foot';

  grid-template-rows: 80px 100vh 100vh 100vh 100px;
  grid-template-columns: 1fr 1fr;
`

export default SiteStrucure
