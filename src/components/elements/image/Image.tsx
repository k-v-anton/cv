import styles from './Image.module.scss'

export const Image = ({ src }: { src: string }) => {
  return <img className={styles.image} src={src} alt='' />
}
