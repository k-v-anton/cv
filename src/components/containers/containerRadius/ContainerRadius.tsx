import React from 'react'
import styles from './ContainerRadius.module.scss'

export const ContainerRadius = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
