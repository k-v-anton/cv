import { data } from '../../../data/data'
import { Skil } from '../../components/skil'
import { ContainerBlock } from '../../containers/containerBlock'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'

export const HardSkils = () => {
  return (
    <ContainerBlock>
      <TitleBlokWhite title={'Hard skils'} />
      <>
        {data.skills.hardSkils.map((skill) => (
          <Skil key={skill.id} {...skill} />
        ))}
      </>
    </ContainerBlock>
  )
}
