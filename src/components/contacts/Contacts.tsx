import { data } from '../../data/data'
import { Contact } from '../contact/Contact'
import styles from './Contacts.module.scss'

export const Contacts = () => {
  const contacts = data.contakts
  console.log(contacts);
  
  return (
    <div className={styles.contacts}>
      <ul>
        {data.contakts.map((contakt) => (
          <Contact key={contakt.id} {...contakt} />
        ))}
      </ul>
    </div>
  )
}
