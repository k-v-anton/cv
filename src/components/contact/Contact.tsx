import { ContactType } from '../../data/data.types'
import styles from './Contact.module.scss'

export const Contact = (props: ContactType) => {

  const { icon: Icon, name, href } = props
  return (
    <li className={styles.conta}>
      <a className={styles.link} href={href} target='blanck' >
        <Icon/>
        <p className={styles.name}>{name}</p>
      </a>
    </li>
  )
}
