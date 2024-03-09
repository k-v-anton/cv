import React from 'react'
import styles from './ButtonAcardeon.module.scss'

type ButtonAcardeonPropsType = {
  value: string
  onClick?: ()=>any
  
}

export const ButtonAcardeon = (props: ButtonAcardeonPropsType) => {
  const {value, onClick} = props
  return (
  <button onClick={onClick} className={styles.buttonAcardeon}>{value}</button>
  )
}
