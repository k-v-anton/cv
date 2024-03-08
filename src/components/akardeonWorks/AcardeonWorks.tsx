import { useState } from 'react'
import { works } from '../../data/data'
import { Item } from './Item'

export const AcardeonWorks = () => {
  const [active, setActive] = useState(1)

  const handleClickItem = (id: number) => {
    id !== active && setActive(id)
  }

  return (
    <>
      {works.map((work) => (
        <Item
          key={work.id}
          handler={handleClickItem}
          active={active}
          {...work}
        />
      ))}
    </>
  )
}
