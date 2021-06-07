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
  background: ${(p) => p.theme.primaryPink};
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  overflow: hidden;
  background-blend-mode: luminosity;
  border: 3px solid ${(p) => p.theme.primaryPink};

  & > div {
    width: 100%;
    padding: 25px;
    padding-bottom: 30px;
    height: max-content;
    opacity: 0;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &.light > div {
    mix-blend-mode: darken;
    background: linear-gradient(to bottom, transparent, #000000de 75%);
  }

  &.dark > div {
    mix-blend-mode: hard-light;
  }

  &:hover {
    background-blend-mode: normal;

    &.light {
      filter: brightness(1.5);
    }
  }

  &:hover > div {
    opacity: 1;
  }

  & h3 {
    font-size: 1.4em;
    text-shadow: 1px 1px white;
  }

  & span {
    display: none;
  }

  & a {
    color: white;
    font-size: 2.5rem;
    text-decoration: none;
    font-weight: bolder;
  }

  &.light a {
  }

  @media (max-width: 750px) {
    height: 400px;
    border: 10px solid ${(p) => p.theme.lightPink};
    background-blend-mode: normal;

    & > div {
      opacity: 1;
      mix-blend-mode: normal !important;
    }
  }
`
