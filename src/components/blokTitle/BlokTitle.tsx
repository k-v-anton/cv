import React from 'react'
import styles from './BlokTitle.module.scss'

type BlokTitlePropsType = {
  title: string
}

export const BlokTitle = (props: BlokTitlePropsType) => {
  const {title} = props
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
