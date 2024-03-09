import { aboutMe } from '../../../data/data'
import { ContainerBlock } from '../../containers/containerBlock'
import { PathWhite } from '../../elements/pathWhite'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'

export const AboutUser = () => {
  return (
    <ContainerBlock>
      <TitleBlokWhite title={'Обо мне'} />
      <PathWhite text={aboutMe} />
    </ContainerBlock>
  )
}
