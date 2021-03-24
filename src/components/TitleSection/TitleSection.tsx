import React, { useRef, useLayoutEffect, useState } from 'react'

import { theme } from '../../config/theme'
import {
  Container,
  TitleImage,
  Title,
  TitleImageWrapper,
  ContentPair,
  TitleSVG,
} from './titleSectionStyle'

type Position = { x: number; y: number }

const GiraffeImage = React.forwardRef((props, ref: React.Ref<HTMLImageElement>) => (
  <TitleImageWrapper>
    <TitleImage
      alt="A giraffe with cool sunglasses"
      ref={ref}
      src={`${process.env.PUBLIC_URL}/giraffe.svg`}
    />
  </TitleImageWrapper>
))

const ColourBlobPath = ({ toPos }) => {
  const fromPos = { x: 0, y: 0 }
  const toOffset = { x: -15, y: 0 }
  return (
    <TitleSVG>
      <path
        d={`M${fromPos.x} ${fromPos.y} L${toPos.x + toOffset.x} ${toPos.y + toOffset.y}`}
        strokeWidth={350}
        strokeLinecap={'round'}
        stroke={theme.secondaryBlue}
      />
    </TitleSVG>
  )
}

const TitleSection: React.FC = () => {
  const [titlePos, setTitlePos] = useState<Position>()
  const titleRef = useRef<HTMLHeadingElement>(null)

  const updatePosition = () => {
    if (titleRef.current !== null) {
      const titleRect = titleRef.current.getClientRects()[0]
      setTitlePos({
        x: titleRect.left + titleRect.width / 2,
        y: titleRect.top + titleRect.height / 2 + document.documentElement.scrollTop,
      })
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updatePosition)
    updatePosition()
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <Container>
      {titlePos && <ColourBlobPath toPos={titlePos} />}
      <ContentPair>
        <GiraffeImage />
        <Title ref={titleRef}>
          Ewan <br /> Breakey
        </Title>
      </ContentPair>
    </Container>
  )
}

export default TitleSection
