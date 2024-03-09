import React from 'react'
import styles from './ContainerDinamicHeight.module.scss'

export const ContainerDinamicHeight = ({children}: {children: JSX.Element[] | JSX.Element | string}) => {
  return (
    <div className={styles.containerDinamicHeight}>
      {children}
    </div>
  )
}
