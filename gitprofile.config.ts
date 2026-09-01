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
          title: 'Kisahmu - DIY Digital Wedding Invitation',
          category: 'SaaS Platform Development',
          period: 'Mei 2026 - Present',
          imageUrl:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/59212419/644357519-0ddea7f7-1973-44f8-9d68-c98b095f2593.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260901%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260901T134043Z&X-Amz-Expires=300&X-Amz-Signature=d0b2542f1f624cce7c1b5394b1eb90fc4c72a160c5a5252d39cb65528e187b0f&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
          description:
            'Platform SaaS pembuatan undangan pernikahan online dengan konsep (DIY) yang memungkinkan kustomisasi tema visual secara instan dan mandiri.',
          highlights: [
            'Dibangun full-stack menggunakan Laravel, Vue.js, dan Tailwind CSS',
            'Fitur live editor tema, buku tamu online, serta integrasi otomatis Payment Gateway',
            'Isolasi environment lokal dengan Docker & alur deployment berbasis Git pada server hosting',
          ],
          skills: [
            'Laravel',
            'Vue.js',
            'Docker',
            'Tailwind CSS',
            'Payment Gateway',
          ],
          link: 'https://www.kisahmu.com',
        },
        {
          title: 'STIDKI Ar-Rahmah Web & CMS',
          category: 'Company Profile & CMS Development',
          period: 'Mar 2025 - Mei 2025',
          imageUrl:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/59212419/644355616-e9e56d4c-b409-4b1c-ae91-9bc59ad10cdf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260901%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260901T133654Z&X-Amz-Expires=300&X-Amz-Signature=5754c2843f3d0b9ee3d4d8e3ef0195f0ba231e55ef6dfda92ea8d82e16d870bb&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
          description:
            'Website profil kampus dan perancangan sistem manajemen konten (CMS) internal untuk menunjang publikasi informasi akademik secara terpusat.',
          highlights: [
            'Merancang arsitektur database relasional & core logic backend Laravel',
            'Implementasi Filament Admin Panel & Livewire untuk dasbor admin yang intuitif',
            'Kolaborasi tim via GitHub (Forking, Pull Request, & Code Review flow)',
          ],
          skills: ['Laravel', 'Filament', 'Livewire', 'MySQL', 'GitHub'],
          link: 'https://www.stidkiarrahmah.ac.id',
        },
        {
          title: 'E-Commerce SKU & Price Reconciliation Tool',
          category: 'Data Audit & Automation Tools',
          period: '',
          imageUrl:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/59212419/644359019-e54df833-b42e-4fcd-816d-6eb46f583a1c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260901%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260901T134224Z&X-Amz-Expires=300&X-Amz-Signature=847e81a878efb44761f284c250233ad553391b1431c1629fda0bb629c5fbdda5&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
          description:
            'Web automasi audit data untuk merekonsiliasi stok dan harga ribuan SKU secara instan antara database internal dengan marketplace yang tidak terintegrasi.',
          highlights: [
            'Melakukan pengecekan otomatis terhadap >5.000 SKU untuk mendeteksi ketidaksesuaian harga dan stok',
            'Dibangun menggunakan Python & Streamlit dengan antarmuka web interaktif dan mudah digunakan',
          ],
          skills: ['Python', 'Streamlit', 'Pandas', 'Data Automation', 'Excel'],
          link: 'https://audit-irfan.streamlit.app/',
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
    instagram: 'irfanmkh_',
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
    'Git',
    'Jubelio Omnichannel',
    'Shopify',
    'Advanced Excel',
    'Streamlit',
    'IT Support',
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dKK-Zn-SZmUe5gZ4__O2Kw8CDzQP3tK11h5ITWrYB7xKJZarFQtVRCvL&s=10',
      company: 'CV Carolina Unggul Persada',
      position: 'E-Commerce & Web Operations Specialist',
      startDate: 'Des 2023',
      endDate: 'Present',
      phases: [
        {
          tag: 'Phase 1: Foundation',
          title: 'Starting from the Basics',
          desc: 'Mengelola katalog produk, pembaruan konten, dan penyiapan skema diskon dasar pada web resmi perusahaan (carolinawatch.id).',
        },
        {
          tag: 'Phase 2: Expansion',
          title: 'Scaling to Marketplaces',
          desc: 'Ekspansi tanggung jawab ke platform marketplace. Tantangan muncul ketika data belum terintegrasi otomatis, menuntut pengecekan manual terhadap stok dan harga di ribuan SKU yang ada.',
        },
        {
          tag: 'Phase 3: Automation',
          title: 'Building the Solution',
          desc: 'Mengembangkan automasi Python untuk audit konsistensi data >5.000 SKU antara sistem internal dan marketplace secara otomatis.',
          liveLink: 'https://audit-irfan.streamlit.app/',
          liveLabel: 'Demo Tools',
        },
        {
          tag: 'Phase 4: Full Scope',
          title: 'Full Ownership Today',
          desc: 'Saat ini bertanggung jawab penuh atas operasional website (Shopify) dan marketplace utama (Shopee & Lazada), mengelola konfigurasi promo mega campaign, serta menjaga kelancaran alur fulfillment.',
        },
      ],
      skills: [
        'E-Commerce Operations',
        'Python',
        'Streamlit',
        'Jubelio',
        'Shopify',
        'Advanced Excel',
      ],
      link: 'https://carolinawatch.id',
    },

    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_HLwWVdKdbW9qimN8-L-85EDzoRXuMXF_eD6TP3J0A&s',
      company: 'GM Rain Group',
      position: 'Admin IT & Marketing',
      startDate: 'Agu 2023',
      endDate: 'Nov 2023',
      phases: [
        {
          tag: 'Web Feature Development',
          title: 'Building Distance-Based Freight Calculator',
          desc: 'Mengelola website profil perusahaan dan mengembangkan fitur kalkulator untuk pengecekan tarif armada berbasis jarak (km) menggunakan PHP Native untuk mempermudah pengecekan estimasi biaya pengiriman oleh calon klien secara instan.',
        },
        {
          tag: 'IT Infrastructure',
          title: 'Hardware, Network & Security Maintenance',
          desc: '•	Memelihara kelancaran operasional IT kantor, mencakup troubleshooting perangkat keras (PC, printer), konfigurasi jaringan router/LAN, serta pemeliharaan sistem monitoring CCTV',
        },
        {
          tag: 'Business Support',
          title: 'Cash Flow Tracking & Partnership Proposals',
          desc: '•	Mengelola administrasi operasional bisnis, termasuk pencatatan arus kas operasional serta penyusunan proposal kerja sama strategis dengan mitra bisnis.',
        },
      ],
      skills: [
        'PHP',
        'Web Development',
        'IT Support & Networking',
        'Hardware Troubleshooting',
        'Financial Administration',
      ],
      link: 'https://gmraingroup.com', // Masukkan link website perusahaan jika ada
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
  footer: `© 2026 <a class="text-primary" href="https://github.com/irfanmkh" target="_blank" rel="noreferrer">Irfan Maulana Khakiki</a> • Powered by <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
