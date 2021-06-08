import styled from 'styled-components'

import BodySection from '../BodySection/BodySection'

export const Container = styled(BodySection)`
  display: grid;
  width: 100vw;
  font-family: ${(p) => p.theme.primaryFont};
  padding: 0px;
  background: linear-gradient(to bottom, #da818d, #9f3b49);
  color: #ffe5e9;
  font-size: 1.3rem;
  margin-bottom: 0px;
  padding: 20px;
  padding-left: 30px;
  border-top: 10px solid #f1aeb8;

  b {
    color: white;
  }

  a[href] {
    color: white;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Copyright = styled('span')`
  margin-top: 10px;
  padding-left: 10px;
  font-size: 1rem;
  font-style: italic;
`
