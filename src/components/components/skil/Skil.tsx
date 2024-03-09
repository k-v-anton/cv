import { SkilType } from '../../../data/data.types'
import { ContainerRowBetween } from '../../containers/ContainerRowBetween'
import { Progress } from '../../elements/Progress'
import { PathWhite } from '../../elements/pathWhite'
export const Skil = (props: SkilType) => {
  const { title, progress } = props
  return (
    <ContainerRowBetween>
      <PathWhite text={title} />
      <Progress progress={progress} />
    </ContainerRowBetween>
  )
}
