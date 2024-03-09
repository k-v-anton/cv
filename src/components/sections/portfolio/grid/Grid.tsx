import React from 'react'
import styles from './Grid.module.scss'

export const Grid = ({children}: {children: JSX.Element[]| JSX.Element | null}) => {
  return (
    <div className={styles.grid}>{children}</div>
  )
}
