import { GitHubIcon } from '../icons/GitHubIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { MailIcon } from '../icons/MailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import { linkedInIcon } from '../icons/linkedInIcon'
import photo from '../images/photo.webp'
import { DataType } from './data.types'

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
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'ReactTS',
      'Redux',
      'ReduxThunk',
      'React Hook Form',
      'Webpack',
      'Yup',
      'Figma',
      'Html',
      'Css',
      'Sass/Scss',
      'Less',
      'Bootstrap',
      'Canvas (2D)',
    ],
  },

  education: [
    {
      id: 1,
      companyName: 'Школа программирования TeachMeSkills',
      speciality: 'Frontend developer',
      startEducation: 'май 2022',
      endEducation: 'март 2023',
    },
    {
      id: 2,
      companyName: 'Stepik',
      speciality: 'Инди курс програмированияна Python',
      startEducation: 'август 2021',
      endEducation: 'март 2022',
    },
    {
      id: 3,
      companyName: 'БНТУ',
      speciality: 'Инженер-механик',
      startEducation: 'сентябрь 2009',
      endEducation: 'июль 2014',
    },
  ],
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
        stack: ['React.ts', 'React.js', 'SCSS', 'HTML', 'React Hook Form', 'Yup', 'React Redux', 'Redux Toolkit'],
      },
    ],
    notIt: [],
  },
}
