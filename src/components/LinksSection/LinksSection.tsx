import React from 'react'

import { LinksContainer, Heading, ContactButton } from './LinksSectionStyle'
import { resumeLink, githubLink, contactMailAddress, storeLink } from '../../config/links'

const LinksSection: React.FC = () => {
  return (
    <LinksContainer>
      <div>
        <Heading>Looking for a software engineer?</Heading>
        <p>
          You should check out my <a href={resumeLink}>resume</a> and my{' '}
          <a href={githubLink}>github</a>!<span className="opt-dv">Then...</span>
        </p>
      </div>
      <div>
        <Heading>Looking for a maths or CS tutor?</Heading>
        <p>
          I'm not currently accepting any more students however I can still run one-off tutorials in
          either CS or maths! <span className="opt-dv">Just let me know...</span>
        </p>
      </div>
      <div>
        <Heading>Want to commission a design or drawing?</Heading>
        <p>
          If you are interested in a print or merchandise of an existing design, check out my{' '}
          <a href={storeLink}>online store</a>. Otherwise, if you want a custom design I can
          absolutely help out! <span className="opt-dv">Just chuck me a message...</span>
        </p>
      </div>
      <ContactButton href={`mailto:${contactMailAddress}`}>Contact Me!</ContactButton>
    </LinksContainer>
  )
}

export default LinksSection
