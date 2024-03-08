import { aboutMe, data } from '../../data/data'
import { AcardeonEducation } from '../acardeonEducation'
import { AcardeonWorks } from '../akardeonWorks'
import { Contact } from '../contact'
import { ContainerBlock } from '../containers/containerBlock'
import { ContainerRadius } from '../containers/containerRadius'
import { PageContainer } from '../containers/pageContainer'
import { Image } from '../elements/image'
import { MainTitle } from '../elements/mainTitle'
import { PathWhite } from '../elements/pathWhite'
import { TitleBlokWhite } from '../elements/titleBlokWhite'
import { Skil } from '../skil'
import styles from './App.module.scss'

export const App = () => {
  return (
    <PageContainer>
      <div className={styles.nav}>
        <ContainerRadius>
          <Image src={data.photo} />
        </ContainerRadius>

        <ContainerBlock>
          <TitleBlokWhite title={'Контакты'} />
          <>
            {data.contakts.map((contakt) => (
              <Contact key={contakt.id} {...contakt} />
            ))}
          </>
        </ContainerBlock>

        <ContainerBlock>
          <TitleBlokWhite title={'Hard skils'} />
          <>
            {data.skills.hardSkils.map((skill) => (
              <Skil key={skill.id} {...skill} />
            ))}
          </>
        </ContainerBlock>
      </div>

      <div className={styles.info}>
        <ContainerBlock>
          <MainTitle title={data.name} />
          <TitleBlokWhite title={data.position} />
        </ContainerBlock>

        <ContainerBlock>
          <TitleBlokWhite title={'Обо мне'} />
          <PathWhite text={aboutMe} />
        </ContainerBlock>

        <ContainerBlock>
          <TitleBlokWhite title={'Образование'} />
          <AcardeonEducation />
        </ContainerBlock>

        <ContainerBlock>
          <TitleBlokWhite title={'Опыт работы'} />
          <AcardeonWorks />
        </ContainerBlock>

        <ContainerBlock>
          <TitleBlokWhite title={'Портфолио'} />
        </ContainerBlock>

      </div>
    </PageContainer>
  )
}
