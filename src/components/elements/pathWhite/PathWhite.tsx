import React from 'react'
import styles from './PathWhite.module.scss'

export const PathWhite = ({text}: {text: string}) => {
  return (
    <p className={styles.path}>{text}</p>
  )
}
