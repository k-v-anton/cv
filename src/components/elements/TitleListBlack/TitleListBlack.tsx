import React from 'react'
import styles from './TitleListBlack.module.scss'

type TitleListBlackPropsType = {
  title: string
}

export const TitleListBlack = (props: TitleListBlackPropsType) => {
  const {title} = props
  return (
    <h3 className={styles.titleListBlack}>{title}</h3>
  )
}
