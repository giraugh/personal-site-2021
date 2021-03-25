import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../config/theme'
import TitleSection from '../TitleSection/TitleSection'
import BioSection from '../BioSection/BioSection'
import ProjectsHeadingSection from '../ProjectsHeadingSection/ProjectsHeadingSection'
import ProjectsListSection from '../ProjectsListSection/ProjectsListSection'
import GamesHeadingSection from '../GamesHeadingSection/GamesHeadingSection'
import GamesListSection from '../GamesListSection/GamesListSection'

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TitleSection />
        <BioSection />
        <ProjectsHeadingSection />
        <ProjectsListSection />
        <GamesHeadingSection />
        <GamesListSection />
      </ThemeProvider>
    </div>
  )
}

export default App
