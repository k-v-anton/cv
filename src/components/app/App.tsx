import { data } from '../../data/data'
import { TitleCV } from '../TitleCV'
import { AcardeonEducation } from '../acardeonEducation'
import { Contacts } from '../contacts'
import { PageContainer } from '../containers/pageContainer'
import { Skills } from '../skills'
import styles from './App.module.scss'

export const App = () => {
  return (
    <PageContainer>
      <div className={styles.nav}>
        <div className={styles.photo}>
          <img className={styles.image} src={data.photo} alt='' />
        </div>
        <Skills />
      </div>

      <div className={styles.info}>
        <TitleCV />
        <Contacts />
        {/* <Tabs/> */}
        <AcardeonEducation />
        <div className={styles.works}>work</div>
      </div>
    </PageContainer>
  )
}
