import styles from './ContainerBlock.module.scss'

export const ContainerBlock = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string[] | string
}) => {
  return <section className={styles.container}>{children}</section>
}
