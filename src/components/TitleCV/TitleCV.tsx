import { data } from '../../data/data'
import styles from './TitleCV.module.scss'

export const TitleCV = () => {
  const { firstName, lastName, middleName, position } = data

  return (
    <div className={styles.container}>
      <div className={styles.fullName}>
        <span className={styles.name}>{firstName}</span>
        <span className={styles.name}>{middleName}</span>
        <span className={styles.name}>{lastName}</span>
      </div>
      <div className={styles.position}>{position}</div>
    </div>
  )
}
