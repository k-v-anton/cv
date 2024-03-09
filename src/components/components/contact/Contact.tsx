import { ContactType } from '../../../data/data.types'
import { ContainerElementWithImage } from '../../containers/ContainerElementWithImage'
import { Link } from '../../elements/Link'
import { PathWhite } from '../../elements/pathWhite'

export const Contact = (props: ContactType) => {
  const { icon: Icon, name, href, value } = props
  return (
    <Link href={href}>
      <ContainerElementWithImage>
        <Icon />
        <PathWhite text={name} />
      </ContainerElementWithImage>
      
      <PathWhite text={value} />
    </Link>
  )
}
