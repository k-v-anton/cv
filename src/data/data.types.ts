type EducationType = {
  id: number
  companyName: string
  speciality: string
  startEducation: string
  endEducation: string
}
export type ContaktIconPropsType = {
  size?: number
  color?: string
}

export type ContactType = {
  id: number
  icon: () => JSX.Element
  name: string
  value: string
  href: string
}

type SkillsType = {
  softSkills: string[]
  hardSkils: string[]
}

type ITWorkType = {
  id: number
  companyName: string
  jobTitle: string
  startWork: string
  endWork: string
  jobResponsibilities: string[]
  stack: string[]
}

type WorksType = {
  it: ITWorkType[]
  notIt: []
}

export type DataType = {
  photo: any
  firstName: string
  middleName: string
  lastName: string
  position: string
  contakts: ContactType[]
  skills: SkillsType
  education: EducationType[]
  aboutMe: string
  works: WorksType
}
