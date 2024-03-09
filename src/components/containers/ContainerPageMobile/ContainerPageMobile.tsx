import styles from './ContainerPageMobile.module.scss'

export const ContainerPageMobile = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string
}) => {
  return <div className={styles.containerPageMobile}>{children}</div>
}
