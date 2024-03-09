import React from 'react'
import styles from './ContainerElementWithImage.module.scss'

export const ContainerElementWithImage = ({children}: {children: JSX.Element[] | JSX.Element | string}) => {
  return (
    <div className={styles.containerElementWithImage}>
      {children}
    </div>
  )
}
