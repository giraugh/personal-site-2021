import styled from 'styled-components'

import BodySection from '../BodySection/BodySection'

export const Container = styled(BodySection)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  row-gap: 60px;
  font-family: ${(p) => p.theme.primaryFont};
  height: max-content;
  margin-top: 2vh;
  padding-right: 10%;

  @media (min-width: 750px) {
    padding-right: 20%;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 100%;
  row-gap: 10px;
`

export const ProjectTitle = styled.h2`
  color: ${(p) => p.theme.primaryBlue};
  text-decoration: underline;
  font-size: 2.3em;
  letter-spacing: 0.04em;
  font-weight: normal;
`

export const ProjectImageWrapper = styled.div`
  position: relative;
  left: -20%;
  width: 140%;
  height: 250px;
  overflow: hidden;
  margin-top: 20px;
  border: 5px solid ${(p) => p.theme.primaryBlue};
  border-left: none;
  border-right: none;

  @media (min-width: 750px) {
    border: 5px solid ${(p) => p.theme.primaryBlue};
    left: -20px;
    border-radius: 10px;
    height: 350px;
    width: 100%;
  }
`

export const ProjectImage = styled.img`
  width: 100%;

  @media (min-width: 750px) {
    position: relative;
  }
`

export const ProjectDescription = styled.span`
  font-size: 1.1em;
  color: ${(p) => p.theme.bodyText};

  @media (min-width: 750px) {
    font-size: 1.4em;
  }
`
