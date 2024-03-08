import React, { useEffect, useRef, useState } from 'react'
import { EducationType } from '../../../data/data.types'
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
  } = props

  const bodyRef = useRef<HTMLDivElement | null>(null)
  const [heihtItem, setHeightItem] = useState<number>(0)

  useEffect(() => {
    bodyRef && bodyRef.current && id === active
      ? setHeightItem(bodyRef.current.offsetHeight)
      : setHeightItem(0)
  }, [bodyRef, active, id])

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => handler(id)}>
        {speciality}
      </button>
      <div
        className={styles.colaps}
        style={{
          height: `${heihtItem}px`,
        }}
      >
        <div ref={bodyRef} className={styles.info}>
          <p>
            {startDate} - {endDate}
          </p>
          <p>{institut}</p>
          {diplomImage && <img src={diplomImage} alt='' />}
        </div>
      </div>
    </div>
  )
})
