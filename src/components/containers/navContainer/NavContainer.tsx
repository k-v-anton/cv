import styles from './NavContainer.module.scss'

export const NavContainer = ({ children }: { children: JSX.Element[] }) => {
  return <nav className={styles.container}>{children}</nav>
}
