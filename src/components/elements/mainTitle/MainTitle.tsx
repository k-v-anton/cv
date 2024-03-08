import React from 'react'
import styles from './MainTitle.module.scss'

export const MainTitle = ({title}: {title: string}) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}
