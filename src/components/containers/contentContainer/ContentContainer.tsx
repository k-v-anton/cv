import React from 'react'
import styles from './ContentContainer.module.scss'

export const ContentContainer = ({children}: {children: JSX.Element[]}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
