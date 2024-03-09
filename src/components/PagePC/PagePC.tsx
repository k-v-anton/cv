import { ContentContainer } from '../containers/contentContainer'
import { NavContainer } from '../containers/navContainer'
import { PageContainer } from '../containers/pageContainer'
import { AboutUser } from '../sections/aboutUser'
import { Contacts } from '../sections/contacts'
import { Education } from '../sections/education'
import { HardSkils } from '../sections/hardSkils'
import { Job } from '../sections/job'
import { Portfolio } from '../sections/portfolio'
import { UserImage } from '../sections/userImage'
import { UserInfo } from '../sections/userInfo'

export const PagePc = () => {
  return (
    <PageContainer>
      <NavContainer>
        <UserImage />
        <Contacts />
        <HardSkils />
      </NavContainer>

      <ContentContainer>
        <UserInfo />
        <AboutUser />
        <Job />
        <Education />
        <Portfolio />
      </ContentContainer>
    </PageContainer>
  )
}
