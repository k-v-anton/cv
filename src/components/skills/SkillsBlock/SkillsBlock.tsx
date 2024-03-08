import React from 'react'
import styles from './SkillsBlock.module.scss'

type SkillsBlockPropsType= {
  children: any
}

export const SkillsBlock = (props: SkillsBlockPropsType) => {
  const {children} = props
  return (
    <div className={styles.block}>
        {children}
    </div>
  )
}
