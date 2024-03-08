import { ContainerBlock } from '../containers/containerBlock'
import { MainTitle } from '../elements/mainTitle'
import { TitleBlokWhite } from '../elements/titleBlokWhite'

export const TitleCV = ({
  name,
  position,
}: {
  name: string
  position: string
}) => {
  return (
    <ContainerBlock>
      <MainTitle title={name} />
      <TitleBlokWhite title={position} />
    </ContainerBlock>
  )
}
