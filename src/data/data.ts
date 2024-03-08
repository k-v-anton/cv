import { GitHubIcon } from '../icons/GitHubIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { MailIcon } from '../icons/MailIcon'
import { PhoneIcon } from '../icons/PhoneIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import { linkedInIcon } from '../icons/linkedInIcon'
import stepikPython from '../images/education/stepickPython.webp'
import tmsFrontend from '../images/education/tmsFrontend.webp'
import photo from '../images/photo.webp'
import { DataType, EducationType, WorkType } from './data.types'

export const data: DataType = {
  photo: photo,
  name: 'Курилик Антон Владимирович',
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
      { id: 1, title: 'JavaScript', progress: 95 },
      { id: 2, title: 'TypeScript', progress: 70 },
      { id: 3, title: 'ReactJS', progress: 95 },
      { id: 4, title: 'ReactTS', progress: 95 },
      { id: 5, title: 'Redux', progress: 75 },
      { id: 6, title: 'ReduxThunk', progress: 60 },
      { id: 7, title: 'React Hook Form', progress: 90 },
      { id: 8, title: 'Webpack', progress: 75 },
      { id: 9, title: 'Yup', progress: 95 },
      { id: 10, title: 'Figma', progress: 50 },
      { id: 11, title: 'Html', progress: 100 },
      { id: 12, title: 'Css', progress: 100 },
      { id: 13, title: 'Sass/Scss', progress: 100 },
      { id: 14, title: 'Less', progress: 90 },
      { id: 15, title: 'Bootstrap', progress: 60 },
      { id: 16, title: 'Canvas (2D)', progress: 75 },
      { id: 17, title: 'React Native', progress: 30 },
      { id: 18, title: 'Node.js', progress: 30 },
      { id: 19, title: 'Python', progress: 30 },
      { id: 20, title: 'SQL', progress: 30 },
    ],
  },
}

export const educations: EducationType[] = [
  {
    id: 1,
    institut: 'TeachMeSkills',
    speciality: 'Frontend developer',
    diplomImage: tmsFrontend,

    startDate: 'май 2022',
    endDate: 'март 2023',
  },
  {
    id: 2,
    institut: 'Stepik',
    speciality: 'Инди курс програмирования на Python',
    diplomImage: stepikPython,
    startDate: 'август 2021',
    endDate: 'март 2022',
    href: 'https://stepik.org/cert/1457169',
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

export const works: WorkType[] = [
  {
    id: 1,
    placeOfWork: 'RoksArt',
    jobTitle: 'Frontend-developer',
    startDate: 'февраль 2023',
    endDate: 'по настоящее время',
    jobResponsebilities: [
      'верстка веб-страниц согласно макету;',
      'внедрение новых компонентов в существующие проекты;',
      'рефакторинг написанного кода;',
      'написание кода для реализации логики приложений;',
      'проверка на кросбраузеность;',
      'код-рефакторинг;',
      'оптимизация работы приложения.',
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
  {
    id: 2,
    placeOfWork: 'Школа программирования TeachMeSkills',
    jobTitle: 'Frontend-developer',
    startDate: 'май 2022',
    endDate: 'февраль 2023',
    jobResponsebilities: [
      'Aдаптивная, семантическая, кросбраузерная верста (HTML);',
      'Cтилизация элементов(Сss, Scss/Sass, Less), анимация;',
      'Функциональное и классовое программирование на JavaScript, React;',
      'Работа с DOM элементами, API, fetch, асинхронными функциями;',
      'Создание графики с использованием Canvas, анимирование графических элементов;',
      'Использование TypeScript для статической типизации;',
      'Работа с дополнительными библиотеками: Router, Redux, ReduxThunk, Redux Persist, React Transition Group, Intersection Observer',
      'Настройка рабочего окружения Webpack, Gulp, Parcel',
      'Работа с git (консоль);',
      'Рабочее окружение: Windows;',
      'Интегрированная среда разработки: Visual Studio Code.',
    ],

    stack: [
      'HTML',
      'CSS',
      'SCSS',
      'javaScript',
      'typeScript',
      'React',
      'React Redux',
    ],
  },
]

export const aboutMe =
  'Frontend разработкик с 2-х летним опытом разработки(комерческая разработка 1 год). Умею разбираться в чужом коде, постоянно учусь новым технологиям и применяю их в работе.'
