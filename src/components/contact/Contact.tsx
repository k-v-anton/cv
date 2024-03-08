import { ContactType } from '../../data/data.types'
import styles from './Contact.module.scss'

export const Contact = (props: ContactType) => {
  const { icon: Icon, name, href, value } = props
  return (
    <a className={styles.contact} href={href} target='blanck'>
      <div className={styles.contactNamewrapper}>
        <Icon />
        <p className={styles.contactTitle}>{name}</p>
      </div>
      <p className={styles.contactValue}>{value}</p>
    </a>
  )
}
