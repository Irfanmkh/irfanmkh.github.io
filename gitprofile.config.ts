// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Irfanmkh', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Kisahmu',
          description:
            'Self-service digital wedding invitation SaaS platform built with Laravel, Vue 3, Inertia.js, and Tailwind CSS.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://kisahmu.com',
        },
        {
          title: 'Automated Data Audit Tool',
          description:
            'Python & Streamlit-based application to reconcile multi-channel e-commerce SKU prices and inventory levels.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Irfanmkh',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Irfan Maulana Khakiki',
    description: 'E-Commerce Operations & Web Operations Specialist',
    imageURL: '',
  },
  social: {
    linkedin: 'irfan-maulana-khakiki-b60109220',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.imaka.my.id',
    phone: '',
    email: 'irfankhakiki17@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Python',
    'Vue.js',
    'Tailwind CSS',
    'MySQL',
    'Docker',
    'Jubelio Omnichannel',
    'Shopify',
    'Advanced Excel',
  ],
  experiences: [
    {
      company: 'CV Carolina Unggul Persada',
      position: 'E-Commerce & Web Operations',
      from: 'Desember 2023',
      to: 'Sekarang',
      companyLink: 'https://carolinawatch.id',
    },
    {
      company: 'STIDKI Ar-Rahmah Surabaya',
      position: 'Web Developer',
      from: 'Maret ',
      to: 'Mei 2025',
      companyLink: 'https://stidkiarrahmah.ac.id',
    },
    {
      company: 'GM Rain Group',
      position: 'IT Support & Marketing',
      from: 'Agustus 2023',
      to: 'November 2023',
      companyLink: 'https://gmraingroup.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Universitas Trunojoyo Madura',
      degree: 'Sarjana (S1) Sistem Informasi',
      from: '2019',
      to: '2023',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  workexperiences: [
    {
      company: 'CV Carolina Unggul Persada',
      position: 'E-Commerce & Web Operations Specialist',
      startDate: 'Jan 2026',
      endDate: 'Present',
      description:
        'Memegang kendali penuh atas operasional website e-commerce dan platform penjualan. Mengonfigurasi strategi promo, mengelola landing page & tata letak produk untuk visibilitas maksimal, menangani investigasi kesalahan pesanan, serta mengintegrasikan otomasi data (Python) untuk rekonsiliasi stok dan harga.',
      skills: [
        'E-Commerce Operationss',
        'Python',
        'Jubelio',
        'Shopify',
        'Advanced Excel',
      ],
      link: 'https://carolinawatch.id',
    },
    {
      company: 'CV Carolina Unggul Persada',
      position: 'Web Admin',
      startDate: 'Des 2023',
      endDate: 'Des 2025',
      description:
        'Bertanggung jawab atas pemeliharaan rutin website dan marketplace, melakukan pembaruan konten, upload produk, pengelolaan harga, dan pengaturan stok dasar.',
      skills: ['Marketplace Admin', 'Content Management', 'Excel'],
      link: 'https://carolinawatch.id',
    },
    {
      company: 'GM Rain Group',
      position: 'IT Support & Marketing',
      startDate: 'Agu 2023',
      endDate: 'Nov 2023',
      description:
        'Menangani dukungan teknis operasional IT serta membantu kebutuhan pemasaran perusahaan.',
      skills: ['IT Support', 'Marketing'],
      link: 'https://gmraingroup.com/',
    },
  ],
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
