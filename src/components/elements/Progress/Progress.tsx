import React from 'react'
import styles from './Progress.module.scss'

type ProgressPropsType = {
  progress: number
  max?: number
}

export const Progress = (props: ProgressPropsType) => {
  const {progress, max=100} = props
  return (
  <progress className={styles.progress}  max={max} value={progress} />

  )
}
