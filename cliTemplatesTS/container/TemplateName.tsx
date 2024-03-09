import React from 'react'
import styles from './TemplateName.module.scss'

export const TemplateName = ({children}: {children: JSX.Element[] | JSX.Element | string}) => {
  return (
    <div className={styles.templateName}>
      {children}
    </div>
  )
}
