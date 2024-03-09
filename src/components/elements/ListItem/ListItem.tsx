import styles from './ListItem.module.scss'

type ListItemPropsType = {
  text: string
}

export const ListItem = (props: ListItemPropsType) => {
  const { text } = props
  return <li className={`${styles.listItem} ${styles.dot}`}>{text}</li>
}
