import React from 'react'
import styles from './PathBlack.module.scss'

export const PathBlack = ({text}: {text: string}) => {
  return (
    <p className={styles.path}>{text}</p>
  )
}
