import styles from './Skil.module.scss'

type SkilPropsType = {
  title: string
  progress: number
}

export const Skil = (props: SkilPropsType) => {
  const { title, progress} = props
  return (
    <div className={styles.container}>
      <p className={styles.name}>{title}</p>
      <progress className={styles.progress} max={100} value={progress}/>
    </div>
  )
}
