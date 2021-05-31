import styled from 'styled-components'

import BodySection from '../BodySection/BodySection'

export const Container = styled(BodySection)`
  display: grid;
  width: 100vw;
  padding: 10px;
  font-family: ${(p) => p.theme.primaryFont};
`

export const GamesGrid = styled.div`
  justify-self: center;
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;

  @media (max-width: 750px) {
    width: 85%;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`

export const GameTile = styled.div`
  width: 100%;
  font-size: 1.3em;
  display: grid;
  column-gap: 5px;
  align-items: end;
  background: coral;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  overflow: hidden;

  & > div {
    width: 100%;
    padding: 25px;
    padding-bottom: 30px;
    height: max-content;
    background: ${(p) => p.theme.primaryPink};
    opacity: 0;
    color: white;
    transition: opacity 0.1s;
  }

  &:hover > div {
    opacity: 1;
  }

  & h3 {
    font-size: 1.4em;
  }

  & span {
    color: ${(p) => p.theme.lightPink};
  }

  & a {
    color: white;
  }

  @media (max-width: 750px) {
    height: 400px;
    border: 10px solid ${(p) => p.theme.lightPink};

    & > div {
      opacity: 1;
    }
  }
`
