import styled from 'styled-components'

import BodySection from '../BodySection/BodySection'

export const ContactButton = styled('a')`
  display: inline-block;
  padding: 5px;
  background: ${(p) => p.theme.primaryPink};
  color: white;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0px 2px 0px #8b4c55;
  grid-row: 2;
  grid-column: 1 / 4;
  font-size: 1.4em;

  @keyframes glow {
    0% {
      color: #da808d;
    }
    100% {
      color: #ae5864;
    }
  }

  &:hover {
    animation-name: glow;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @media (max-width: 750px) {
    grid-column: span 1;
    grid-row: 4;
  }
`

export const LinksContainer = styled(BodySection)`
  display: grid;
  grid-auto-flow: column;
  column-gap: 20px;
  row-gap: 20px;
  width: 90%;
  min-height: 250px;
  font-family: ${(p) => p.theme.primaryFont};
  padding-bottom: 20px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    margin-bottom: 130px;

    .opt-dv {
      display: none;
    }
  }

  > div {
    background: ${(p) => p.theme.primaryPink};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p {
      margin-top: 0.7em;
      color: #ffe5e9;
      font-size: 1.3em;

      & > a[href] {
        color: white;
        padding-left: 3px;
        padding-right: 3px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`

export const Heading = styled.h2`
  color: white;
  font-size: 1.5em;
  font-family: ${(p) => p.theme.primaryFont};
`
