import React from 'react'
import { BlokTitle } from '../blokTitle'

type AboutUserPropsType = {
  title: string
  text: string
}

export const AboutUser = React.memo((props: AboutUserPropsType) => {
  const { title, text } = props
  return (
    <div>
      <BlokTitle title={title} />
      <p>{text}</p>
    </div>
  )
})
