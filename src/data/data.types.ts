
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

export type SkilType = {
  id: number
  title: string
  progress: number
}

export type SkillsType = {
  softSkills: SkilType[]
  hardSkils: SkilType[]
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
  aboutMe: string
  works: WorksType
}



export type EducationType = {
  id: number;
  institut: string;
  speciality: string;
  diplomImage: string;
  startDate: string;
  endDate: string;
}
export type EducationsType = EducationType[]