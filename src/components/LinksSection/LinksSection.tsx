import React from 'react'

import { LinksContainer, Heading, ContactButton } from './LinksSectionStyle'
import { resumeLink, githubLink, contactMailAddress, storeLink } from '../../config/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faDivide, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

const LinksSection: React.FC = () => {
  return (
    <LinksContainer>
      <div>
        <Heading>
          <span>Looking for a software engineer?</span>
          <FontAwesomeIcon icon={faLaptopCode} />
        </Heading>
        <p>
          You should check out my <a href={resumeLink}>resume</a> and my{' '}
          <a href={githubLink}>github</a>!
        </p>
      </div>
      <div>
        <Heading>
          <span>Looking for a maths or CS tutor?</span>
          <FontAwesomeIcon icon={faDivide} />
        </Heading>
        <p>I'm currently available for ad-hoc CS and maths tutorials! </p>
      </div>
      <div>
        <Heading>
          <span>Want to commission a design or drawing?</span>
          <FontAwesomeIcon icon={faPencilRuler} />
        </Heading>
        <p>
          Check out my <a href={storeLink}>online store</a> for existing designs. Otherwise, contact
          me for a quote!
        </p>
      </div>
      <ContactButton href={`mailto:${contactMailAddress}`}>Contact Me!</ContactButton>
    </LinksContainer>
  )
}

export default LinksSection
