import { useEffect, useRef, useState } from 'react'
import { WorkType } from '../../../data/data.types'
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

    console.log(
      bodyRef &&
        bodyRef.current &&
        id === active &&
        bodyRef.current.offsetHeight
    )
  })

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => handler(id)}>
        {placeOfWork}
      </button>
      <div
        className={styles.colaps}
        style={{
          height: `${heihtItem}px`,
        }}
      >
        <div ref={bodyRef} className={styles.wrapperContent}>
          <div className={styles.content}>
            <h3 className={styles.title}>{jobTitle}</h3>

            <p className={styles.item}>
              {startDate} - {endDate}
            </p>
            <h3 className={styles.title}>Должносные обязанности:</h3>
            <ul>
              {jobResponsebilities.map((item) => (
                <li className={`${styles.item} ${styles.listDot}`}>{item}</li>
              ))}
            </ul>

            <h3 className={styles.title}>Стэк:</h3>
            <ul>
              {stack.map((item) => (
                <li className={`${styles.item} ${styles.listDot}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
