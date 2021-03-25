import styled from 'styled-components'

import BodySection from '../BodySection/BodySection'

export const Container = styled(BodySection)`
  font-family: ${(p) => p.theme.primaryFont};
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-left: 0px;
  padding-right: 30px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 3fr;
  }
`

export const GamesImageWrapper = styled.div`
  position: relative;
  width: 600px;
  transform: scaleX(-1);

  @media (max-width: 950px) {
    width: 450px;
    left: -40px;
  }

  @media (max-width: 750px) {
    width: 350px;
    left: -50px;
  }
`

export const GamesImage = styled.img`
  width: 100%;
`

export const Heading = styled.h2`
  font-size: 4.5em;
  color: ${(p) => p.theme.primaryPink};

  @media (max-width: 750px) {
    font-size: 3em;
  }
`

export const HeadingWrapper = styled.div`
  align-self: center;
  justify-self: start;
`

export const HeadingDescription = styled.div`
  margin-top: 20px;
  font-size: 1.3em;
  color: ${(p) => p.theme.bodyText};
`
