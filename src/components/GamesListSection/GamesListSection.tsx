import React from 'react'

import { Container, GamesGrid, GameTile } from './gamesListSectionStyle'
import { games } from '../../config/games'

const GamesListSection: React.FC = () => {
  return (
    <Container>
      <GamesGrid>
        {' '}
        {games.map((game) => (
          <Game key={game.name} {...game}></Game>
        ))}{' '}
      </GamesGrid>
    </Container>
  )
}

const Game = ({ name, description, image, link }) => (
  <GameTile style={{ backgroundImage: `url(${image}` }}>
    <div>
      <h3>
        <a href={link}>{name}</a>
      </h3>
      <span>{description}</span>
    </div>
  </GameTile>
)

export default GamesListSection
