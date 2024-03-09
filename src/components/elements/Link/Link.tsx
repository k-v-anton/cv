import styles from './Link.module.scss'

type LinkPropsType = {
  href: string
  children: JSX.Element[] | JSX.Element | string
}

export const Link = (props: LinkPropsType) => {
  const { href, children } = props
  return (
    <a href={href} target='blanck' className={styles.link}>
      {children}
    </a>
  )
}
