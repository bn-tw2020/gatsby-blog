export default {
  title: `개발하는 스티치`,
  description: `개발자 스티치`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://github.com/bn-tw2020`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `bn-tw2020/gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID

  author: {
    name: `스티치`,
    nickname: `stitch`,
    bio: {
      role: `개발자`,
      description: ['Android', 'Kotlin'],
      birth: '1997.04.06',
      residence: 'South Korea',
      bachelorDegree: 'Computer Software Engineering',
    },
    social: {
      github: `https://github.com/bn-tw2020`,
      linkedIn: `https://www.linkedin.com/in/%ED%83%9C%EC%9A%B0-%EB%82%A8-449403226/`,
      email: `skaxodn97@gmail.com`,
      resume: ``,
    },
  },

  // metadata for About Page
  about: {
    careers: [
      {
        date: '2023.01.02 - NOW',
        en: 'ZumInternet',
        kr: '줌인터넷',
        info: 'Android development group',
      },
      {
        date: '2022.07.01 - 2022.08.31',
        en: 'Woowa Brothers Corp.',
        kr: '우아한형제들',
        info: 'Wowahan Tech Camp Android 1th',
      },
    ],

    activities: [
      {
        date: '2022.09 - NOW',
        en: 'SOPT makers',
        kr: '솝트 메이커스',
        info: 'Organization makes products for SOPT',
        link: '',
      },
    ],

    projects: [
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};