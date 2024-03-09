import { data } from '../../../data/data'
import { ContainerBlock } from '../../containers/containerBlock'
import { MainTitle } from '../../elements/mainTitle'
import { SubTitle } from '../../elements/subTitle'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'

export const UserInfo = () => {
  return (
    <ContainerBlock>
      <MainTitle title={data.name} />
      <SubTitle title={data.position} />
    </ContainerBlock>
  )
}
