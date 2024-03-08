import { PropsType } from './PageContainer.Types'
import styles from './PageContainer.module.scss'

export const PageContainer = (props: PropsType) => {
  const { children } = props
  return <section className={styles.section}>{children}</section>
}
