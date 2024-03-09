import styles from './PageContainer.module.scss'

type PropsType = {
  children: JSX.Element[] | JSX.Element | null | undefined
}

export const PageContainer = (props: PropsType) => {
  const { children } = props
  return <section className={styles.section}>{children}</section>
}
