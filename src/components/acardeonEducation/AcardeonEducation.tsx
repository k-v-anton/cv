import { useState } from 'react'
import { educations } from '../../data/data'
import { Item } from './item'

export const AcardeonEducation = () => {
  const [active, setActive] = useState(1)

  const handleClickItem = (id: number) => {
    active && id !== active && setActive(id)
  }

  return (
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
  )
}
