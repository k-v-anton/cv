import { data } from '../../../data/data'
import { ContainerRadius } from '../../containers/containerRadius'
import { Image } from '../../elements/image'

export const UserImage = () => {
  return (
    <ContainerRadius>
      <Image src={data.photo} />
    </ContainerRadius>
  )
}
