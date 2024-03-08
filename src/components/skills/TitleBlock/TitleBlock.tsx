import React from 'react'
import styles from './TitleBlock.module.scss'

type TitleBlockPropsType = {
  title: string
}

export const TitleBlock = (props: TitleBlockPropsType) => {
  const {title} = props
  return (
    <h2 className={styles.title}>{title}</h2>
  )
}
