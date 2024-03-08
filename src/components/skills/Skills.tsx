import { useEffect, useMemo, useState } from 'react'
import { data } from '../../data/data'
import { SkilType, SkillsType } from '../../data/data.types'
import styles from './Skills.module.scss'
import { SkillsBlock } from './SkillsBlock'
import { TitleBlock } from './TitleBlock'
import { Skil } from './skil/Skil'

export const Skills = () => {
  const [state, setState] = useState<[string, SkilType[]][] | null>(null)

  const renderList = (data: SkillsType) => {
    return Object.entries(data).filter((element) => element[1].length > 0)
  }

  useEffect(() => {
    setState(renderList(data.skills))
  }, [])

  return (
    <div className={styles.container}>
      {state &&
        state.map((item) => (
          <SkillsBlock key={item[0].split('(?=[А-Я])').join(' ')}>
            <TitleBlock title={item[0]} />
            {item[1].map((skill) => (
              <Skil key={skill.id} {...skill} />
            ))}
          </SkillsBlock>
        ))}
    </div>
  )
}
