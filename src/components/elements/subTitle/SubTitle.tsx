import React from 'react'
import styles from './SubTitle.module.scss'

export const SubTitle = ({title}: {title: string}) => {
  return (
    <h3 className={styles.title}>{title}</h3>
  )
}
