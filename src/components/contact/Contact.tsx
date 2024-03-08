import { ContactType } from '../../data/data.types'
import { PathWhite } from '../elements/pathWhite'
import styles from './Contact.module.scss'

export const Contact = (props: ContactType) => {
  const { icon: Icon, name, href, value } = props
  return (
    <a className={styles.contact} href={href} target='blanck'>
      <div className={styles.contactNamewrapper}>
        <Icon />
        <PathWhite text={name}/>
      </div>
      <PathWhite text={value}/>
    </a>
  )
}
