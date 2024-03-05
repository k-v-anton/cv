import { PropsType } from './SectionContainer.Types'
import styles from './SectionContainer.module.scss'

export const SectionContainer = (props: PropsType) => {
  const { children } = props
  return <section className={styles.section}>{children}</section>
}
