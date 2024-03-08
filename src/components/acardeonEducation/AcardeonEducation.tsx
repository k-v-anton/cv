import { useState } from 'react'
import { educations } from '../../data/data'
import { BlokTitle } from '../blokTitle'
import { SectionContainer } from '../containers/sectionContainer/SectionContainer'
import { Item } from './item'

export const AcardeonEducation = () => {
  const [active, setActive] = useState(1)

  const handleClickItem = (id: number) => {
    if (active && id === active) return
    setActive(id)

    // active && id !== active && setActive(id)
  }

  return (
    <SectionContainer>
      <BlokTitle title='Образование' />

      <>
        {educations.map((item) => (
          <Item
            key={item.id}
            {...item}
            active={active}
            handler={handleClickItem}
          />
        ))}
      </>
    </SectionContainer>
  )
}
