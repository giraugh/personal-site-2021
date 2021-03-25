import React from 'react'

import { projects } from '../../config/projects'
import {
  Container,
  ProjectContainer,
  ProjectTitle,
  ProjectImage,
  ProjectImageWrapper,
  ProjectDescription,
} from './projectsListSectionStyle'

const ProjectsListSection: React.FC = () => {
  return (
    <Container>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Container>
  )
}

const Project = ({ name, description, image, link }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>
        <a href={link}>{name}</a>
      </ProjectTitle>
      <ProjectDescription> {description} </ProjectDescription>
      <ProjectImageWrapper>
        <ProjectImage style={{ backgroundImage: `url(${image})` }}></ProjectImage>
      </ProjectImageWrapper>
    </ProjectContainer>
  )
}

export default ProjectsListSection
