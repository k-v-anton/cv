import { data } from '../../../data/data'
import { Contact } from '../../components/contact'
import { ContainerBlock } from '../../containers/containerBlock'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'

export const Contacts = () => {
  return (
    <ContainerBlock>
      <TitleBlokWhite title={'Контакты'} />
      <>
        {data.contakts.map((contakt) => (
          <Contact key={contakt.id} {...contakt} />
        ))}
      </>
    </ContainerBlock>
  )
}
