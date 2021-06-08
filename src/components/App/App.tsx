import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../config/theme'
import TitleSection from '../TitleSection/TitleSection'
import BioSection from '../BioSection/BioSection'
import ProjectsHeadingSection from '../ProjectsHeadingSection/ProjectsHeadingSection'
import ProjectsListSection from '../ProjectsListSection/ProjectsListSection'
import GamesHeadingSection from '../GamesHeadingSection/GamesHeadingSection'
import GamesListSection from '../GamesListSection/GamesListSection'
import LinksSection from '../LinksSection/LinksSection'
import FooterSection from '../FooterSection/FooterSection'

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TitleSection />
        <BioSection />
        <LinksSection />
        <ProjectsHeadingSection />
        <ProjectsListSection />
        <GamesHeadingSection />
        <GamesListSection />
        <FooterSection />
      </ThemeProvider>
    </div>
  )
}

export default App
