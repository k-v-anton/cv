import { ContainerPageMobile } from '../containers/ContainerPageMobile'
import { AboutUser } from '../sections/aboutUser'
import { Contacts } from '../sections/contacts'
import { Education } from '../sections/education'
import { HardSkils } from '../sections/hardSkils'
import { Job } from '../sections/job'
import { Portfolio } from '../sections/portfolio'
import { UserImage } from '../sections/userImage'
import { UserInfo } from '../sections/userInfo'

export const PageMobile = () => {
  return (
    <>
      <ContainerPageMobile>
      <UserInfo />
        <UserImage />
        <Contacts />
        <HardSkils />
        <Job />
        <AboutUser />
        <Education />
        <Portfolio />
      </ContainerPageMobile>
    </>
  )
}
