import React from 'react'

import { Container, Copyright } from './FooterSectionStyle'
import { siteGithubRepo } from '../../config/links'

const FooterSection: React.FC = () => {
  return (
    <Container>
      <p>
        <b>This website is open source!</b>
        <br />
        The code and art assets are free to use for any non-profit adaptations. Check it out and
        make a fork on <a href={siteGithubRepo}>github</a>!
      </p>
      <Copyright>
        Copyright 2021 Ewan Breakey
        <br />
        (Attribution-NonCommercial 4.0 International)
      </Copyright>
    </Container>
  )
}

export default FooterSection
