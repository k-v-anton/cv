import styles from './TitleBlokWhite.module.scss'

export const TitleBlokWhite = ({ title }: { title: string }) => {
  return <h3 className={styles.title}>{title}</h3>
}
