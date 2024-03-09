import React, { useEffect, useRef, useState } from 'react'
import { EducationType } from '../../../data/data.types'
import { ButtonAcardeon } from '../../ButtonAcardeon'
import { ContainerDinamicHeight } from '../../containers/ContainerDinamicHeight'
import { PathBlack } from '../../elements/PathBlack'
import { TitleListBlack } from '../../elements/TitleListBlack'
import styles from './Item.module.scss'

type ItemAcardeonPropsType = EducationType & {
  active: number
  handler: (id: number) => void
}

export const Item = React.memo((props: ItemAcardeonPropsType) => {
  const {
    active,
    handler,
    diplomImage,
    endDate,
    id,
    institut,
    speciality,
    startDate,
    href,
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
      <ButtonAcardeon onClick={() => handler(id)} value={speciality} />
      <div
        className={styles.colaps}
        style={{
          height: `${heihtItem}px`,
        }}
      >
        <div ref={bodyRef} className={styles.wrapperContent}>
          <div className={styles.content}>
            <div>
              <TitleListBlack title={institut} />
              <PathBlack text={`(${startDate} - ${endDate})`} />
            </div>

            <div className={styles.image}>
              {diplomImage && (
                <a href={href} target='blanck'>
                  <img src={diplomImage} alt='' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContainerDinamicHeight>
  )
})
