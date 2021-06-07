import React from 'react'

import {
  Container,
  GamesImage,
  GamesImageWrapper,
  Heading,
  HeadingWrapper,
  HeadingDescription,
} from './gamesHeadingSectionStyle'
import { gamesDescription } from '../../config/strings'

const BranchImage = () => (
  <GamesImageWrapper>
    <GamesImage alt="A branch with a pink bird on it" src={`${process.env.PUBLIC_URL}/bird.png`} />
  </GamesImageWrapper>
)

const GamesHeaderSection: React.FC = () => {
  return (
    <Container>
      <BranchImage />
      <HeadingWrapper>
        <Heading id="games"> Games & Other Projects </Heading>
        <HeadingDescription> {gamesDescription} </HeadingDescription>
      </HeadingWrapper>
    </Container>
  )
}

export default GamesHeaderSection
