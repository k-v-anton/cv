import React from 'react'
import styles from './ContainerRowBetween.module.scss'

export const ContainerRowBetween = ({children}: {children: JSX.Element[] | JSX.Element | string}) => {
  return (
    <div className={styles.containerRowBetween}>
      {children}
    </div>
  )
}
