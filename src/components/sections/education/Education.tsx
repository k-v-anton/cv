import React from 'react'
import { ContainerBlock } from '../../containers/containerBlock'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'
import { AcardeonEducation } from '../../acardeonEducation'

export const Education = () => {
  return (
    <ContainerBlock>
    <TitleBlokWhite title={'Образование'} />
    <AcardeonEducation />
  </ContainerBlock>
  )
}
