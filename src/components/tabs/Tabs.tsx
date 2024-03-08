import { useState } from 'react'
import { educations } from '../../data/data'
import { AcardeonEducation } from '../acardeonEducation'
import styles from './Tabs.module.scss'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const dataTabs = [
    { id: 1, title: 'education' },
    { id: 2, title: 'works', body: educations },
    { id: 3, title: 'не придумал', body: educations },
  ]
  const handleClickTabs = (e: any) => {
    setActiveTab(+e.target.dataset.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs} onClick={handleClickTabs}>
        {dataTabs.map((tab) => (
          <button
            key={tab.id}
            data-id={tab.id}
            className={`${styles.tabBtn} ${
              activeTab === tab.id ? styles.active : ''
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.activeTabBody}>
        <AcardeonEducation />
      </div>
    </div>
  )
}
