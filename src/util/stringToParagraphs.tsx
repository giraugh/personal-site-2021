import React from 'react'

type StringToParagraphsF = (str: string) => JSX.Element[]
export const stringToParagraphs: StringToParagraphsF = (str) =>
  str.split('\n').map((s, i) => <p key={i}>{s}</p>)
