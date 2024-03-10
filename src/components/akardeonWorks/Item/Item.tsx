import { useEffect, useRef, useState } from 'react'
import { WorkType } from '../../../data/data.types'
import { ButtonAcardeon } from '../../ButtonAcardeon'
import { ContainerDinamicHeight } from '../../containers/ContainerDinamicHeight'
import { SectionContainer } from '../../containers/sectionContainer/SectionContainer'
import { PathBlack } from '../../elements/PathBlack'
import { TitleListBlack } from '../../elements/TitleListBlack'
import { UnorderedList } from '../../elements/UnorderedList'
import styles from './Item.module.scss'

type ItemAcardeonPropsType = WorkType & {
  active: number
  handler: (id: number) => void
}

export const Item = (props: ItemAcardeonPropsType) => {
  const {
    active,
    handler,
    endDate,
    id,
    startDate,
    placeOfWork,
    jobTitle,
    jobResponsebilities,
    stack,
  } = props

  const bodyRef = useRef<HTMLDivElement | null>(null)
  const [heihtItem, setHeightItem] = useState<number>(0)

  useEffect(() => {
    bodyRef && bodyRef.current && id === active
      ? setHeightItem(bodyRef.current.offsetHeight)
      : setHeightItem(0)
  }, [active, id, bodyRef])

  return (
    <ContainerDinamicHeight>
      <ButtonAcardeon value={placeOfWork} onClick={() => handler(id)} />
      <div
        className={styles.colaps}
        style={{
          height: `${heihtItem}px`,
        }}
      >
        <div ref={bodyRef} className={styles.wrapperContent}>
          <div className={styles.content}>
            <SectionContainer>
              <div>
                <TitleListBlack title={jobTitle} />
                <PathBlack text={`(${startDate} - ${endDate})`} />
              </div>

              <UnorderedList
                list={jobResponsebilities}
                title={'Должносные обязанности:'}
              />

              <UnorderedList list={stack} title={'Стэк:'} />
            </SectionContainer>
          </div>
        </div>
      </div>
    </ContainerDinamicHeight>
  )
}
