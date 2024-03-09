import { Link } from '../../../elements/Link'
import { Image } from '../../../elements/image'
import styles from './Item.module.scss'


export const Item = ({image, href}: {image: string, href: string}) => {
  return <div className={styles.item}>
    <Link href={href}>
      <Image src={image}/>
    </Link>
  </div>
}
