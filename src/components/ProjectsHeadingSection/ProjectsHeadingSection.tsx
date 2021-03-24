import React from 'react'

import {
  Heading,
  HeadingWrapper,
  HeadingDescription,
  Container,
  HeadingImageWrapper,
  HeadingImage,
} from './projectsHeadingSectionStyle'
import { projectsDescription } from '../../config/strings'

const SnakeImage = () => (
  <HeadingImageWrapper>
    <HeadingImage alt="A blue snake with headphones" src={`${process.env.PUBLIC_URL}/snake.svg`} />
  </HeadingImageWrapper>
)

const ProjectsHeadingSection: React.FC = () => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>Projects</Heading>
        <HeadingDescription>{projectsDescription}</HeadingDescription>
      </HeadingWrapper>
      <SnakeImage />
    </Container>
  )
}

export default ProjectsHeadingSection
