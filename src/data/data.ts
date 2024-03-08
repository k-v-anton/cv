import { GitHubIcon } from '../icons/GitHubIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { MailIcon } from '../icons/MailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import { linkedInIcon } from '../icons/linkedInIcon'
import photo from '../images/photo.webp'
import { DataType, EducationType } from './data.types'

export const data: DataType = {
  photo: photo,
  firstName: 'Антон',
  middleName: 'Владимирович',
  lastName: 'Курилик',
  position: 'Frontend-developer',

  contakts: [
    {
      id: 1,
      icon: PhoneIcon,
      name: 'phone',
      value: '+375295471335',
      href: 'tel: +375295471335',
    },
    {
      id: 2,
      icon: MailIcon,
      name: 'mail',
      value: 'antonkurilik17@gmail.com',
      href: '',
    },
    {
      id: 3,
      icon: GitHubIcon,
      name: 'github',
      value: 'github.com/k-v-anton',
      href: 'https://github.com/k-v-anton',
    },
    {
      id: 4,
      icon: linkedInIcon,
      name: 'linkedin',
      value: 'linkedin.com/in/anton-kurilik',
      href: 'linkedin.com/in/anton-kurilik',
    },
    {
      id: 5,
      icon: InstagramIcon,
      name: 'instagram',
      value: 'instagram.com/antonkurilik',
      href: 'instagram.com/antonkurilik',
    },
    {
      id: 6,
      icon: TelegramIcon,
      name: 'telegram',
      value: '@KA_1708',
      href: '',
    },
  ],

  skills: {
    softSkills: [],
    hardSkils: [
      { id: 1, title: 'JavaScript', progress: 75 },
      { id: 2, title: 'TypeScript', progress: 75 },
      { id: 3, title: 'ReactJS', progress: 75 },
      { id: 4, title: 'ReactTS', progress: 75 },
      { id: 5, title: 'Redux', progress: 75 },
      { id: 6, title: 'ReduxThunk', progress: 75 },
      { id: 7, title: 'React Hook Form', progress: 75 },
      { id: 8, title: 'Webpack', progress: 75 },
      { id: 9, title: 'Yup', progress: 75 },
      { id: 10, title: 'Figma', progress: 75 },
      { id: 11, title: 'Html', progress: 75 },
      { id: 12, title: 'Css', progress: 75 },
      { id: 13, title: 'Sass/Scss', progress: 75 },
      { id: 14, title: 'Less', progress: 75 },
      { id: 15, title: 'Bootstrap', progress: 75 },
      { id: 16, title: 'Canvas (2D)', progress: 75 },
    ],
  },
  aboutMe:
    'Frontend разработкик с 2-х летним опытом разработки(комерческая разработка 1 год). Умею разбираться в чужом коде, постоянно учусь новым технологиям и применяю их в работе.',
  works: {
    it: [
      {
        id: 1,
        companyName: 'RoksArt',
        jobTitle: 'Frontend-developer',
        startWork: 'февраль 2023',
        endWork: 'по настоящее время',
        jobResponsibilities: [
          'верстка веб-страниц согласно макету;',
          'внедрение новых компонентов в существующие проекты;',
          'рефакторинг написанного кода;',
          'исправление багов;',
          'написание кода для реализации логики приложений;',
          'проверка на кросбраузеность.',
        ],
        stack: [
          'React.ts',
          'React.js',
          'SCSS',
          'HTML',
          'React Hook Form',
          'Yup',
          'React Redux',
          'Redux Toolkit',
        ],
      },
    ],
    notIt: [],
  },
}

export const educations: EducationType[] = [
  {
    id: 1,
    institut: 'TeachMeSkills',
    speciality: 'Frontend developer',
    diplomImage: '',
    startDate: 'май 2022',
    endDate: 'март 2023',
  },
  {
    id: 2,
    institut: 'Stepik',
    speciality: 'Инди курс програмирования на Python',
    diplomImage: '',
    startDate: 'август 2021',
    endDate: 'март 2022',
  },
  {
    id: 3,
    institut: 'БНТУ',
    speciality: 'Инженер механик',
    diplomImage: '',
    startDate: 'сентябрь 2009',
    endDate: 'июль 2014',
  },
]