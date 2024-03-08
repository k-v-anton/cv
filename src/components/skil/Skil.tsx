import { SkilType } from '../../data/data.types'
import styles from './Skil.module.scss'
export const Skil = (props: SkilType) => {
  const { title, progress } = props
  return (
    <div className={styles.container}>
      <p className={styles.name}>{title}</p>
      <progress className={styles.progress} max={100} value={progress} />
    </div>
  )
}
