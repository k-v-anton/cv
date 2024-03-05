import { data } from '../../../data/data'
import { Contact } from '../../contact'
import styles from './CVGreedPrimary.module.scss'

export const CVGreedPrimary = () => {
  return (
    <div className={styles.greed}>
      <div className={styles.nav}>
        <div className={styles.photo}>
          <img className={styles.image} src={data.photo} alt='' />
        </div>
        <div className={styles.skills}>
          <h2>skills</h2>
          <div className={styles.soft}>
            <h3>soft skills</h3>
          </div>
          <div className={styles.hard}>
            <h3>hard skills</h3>
            <ul>
              {data.skills.hardSkils.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.name}>name</div>
          <div className={styles.position}>position</div>
        </div>
        <div className={styles.contacts}>
          <ul>
            {data.contakts.map((contakt) => (
              <Contact key={contakt.id} {...contakt} />
            ))}
          </ul>
        
        </div>
      </div>
      <div className={styles.works}>works</div>
    </div>
  )
}
