import styles from './SectionContainer.module.scss'

type SectionContainerPropsType = {
  children: JSX.Element[]
}

export const SectionContainer = (props: SectionContainerPropsType) => {
  const { children } = props
  return <div className={styles.container}>{children}</div>
}
