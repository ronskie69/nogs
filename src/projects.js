import {
    FaAndroid,
    FaJava,
    FaDatabase,
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaPhp,
    FaBrush,
    FaAdobe
} from 'react-icons/fa'

const web= [
    {
        id: 1,
        title: 'COVID-19 Tracker',
        info: 'My first project in Website Development.',
        image: require('./images/covid.jpg'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        description: 'Covid Updates',
        link: 'https://covidupdates.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 2,
        title: 'QuickWiki',
        description: 'Simple Wikipedia App',
        info: 'I used Wikipedia API there.',
        image: require('./images/quickwiki.jpg'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://quickwiki.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 3,
        title: 'Quiz Pinas',
        description: 'Simple Quiz App',
        info: 'A simple quiz app about the Philippine History and also the latest.',
        image: require('./images/quiz.png'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://quizpinas.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 4,
        title: 'Music App',
        description: 'My Fave Songs',
        info: 'My favorite songs are in this website.',
        image: require('./images/nogsumusic.jpg'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://nogsu.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 5,
        title: 'Calamba Wonders',
        info: 'System of our Thesis. This app is responsible for providing route to tourist spots in Calamba City, Laguna.',
        image: require('./images/cw.jpg'),
        languages: [
            {
                id: 1,
                icon: FaAndroid,
                name: "Android"
            },
            {
                id: 2,
                icon: FaJava,
                name: "Java"
            }
        ],
        description: 'Tourism App',
        link: 'https://youtu.be/TzI6sNZCaqo',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 6,
        title: 'Queen Burger',
        info: 'Simple Web Design about burgers from Burger King.',
        image: require('./images/queenburger.jpg'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        description: 'Inspired by Burger King.',
        link: 'https://queenburger.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 7,
        title: 'Istoryang Kape',
        description: 'Story Sharing App',
        info: 'Simple website for sharing thoughts, expression, stories and experiences in life.',
        image: require('./images/istorya.jpg'),
        languages: [
            {
                id: 1,
                icon: FaNodeJs,
                name: "Node"
            },
            {
                id: 2,
                icon: FaDatabase,
                name: "MongoDB"
            }
        ],
        link: 'https://istoryangkape.herokuapp.com/',
        isLoaded: false,
        type: "Website"
    },
    // {
    //     id: 7,
    //     title: 'Kamote Republic',
    //     description: 'Kamote Riders website',
    //     info: 'A website just made for fun. It is all about the Kamote riders and drivers on the road.',
    //     image: require('./images/kamotex.jpg'),
    //     languages: [
    //         {
    //             id: 1,
    //             icon: FaHtml5,
    //             name: "HTML5"
    //         },
    //         {
    //             id: 2,
    //             icon: FaJs,
    //             name: "JS"
    //         }
    //     ],
    //     link: 'https://kamoterepublic.surge.sh/',
    //     isLoaded: false,
    //     type: "Website"
    // },
    {
        id: 8,
        title: 'CLDD LMS',
        description: 'Loan Management',
        info: 'A website we created on our Internship in City Hall of Calamba. It is made for client management and loans.',
        image: require('./images/lms.jpg'),
        languages: [
            {
                id: 1,
                icon: FaPhp,
                name: "PHP"
            },
            {
                id: 2,
                icon: FaDatabase,
                name: "MySQL"
            }
        ],
        link: 'https://github.com/ronskie69/cldd_lms',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 9,
        title: 'Quiz Pinas 2',
        description: 'Simple Quiz App',
        info: 'Another Version of Quiz Pinas App.',
        image: require('./images/quizpinas2.png'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://quizpinas2.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 10,
        title: 'BFoods',
        description: 'Simple Website',
        info: 'Just a simple website.',
        image: require('./images/bfoods.webp'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        link: 'https://bfoods.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 11,
        title: 'KR Photography',
        description: 'Simple Website',
        info: 'Photography business website.',
        image: require('./images/kr_photography.jpg'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        link: 'https://ronskie69.github.io/krphotography/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 12,
        title: 'Kape-Ling',
        description: 'Simple Website',
        info: 'Coffee Shop website.',
        image: require('./images/kapeling.jpg'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        link: 'https://ronskie69.github.io/kapeling',
        isLoaded: false,
        type: "Website"
    },
]

const company= [
    {
        id: 1,
        title: 'Online SLVL',
        info: "Company's Online Leave/Undertime Filing",
        image: require('./images/slvl1.webp'),
        languages: [
            {
                id: 1,
                icon: FaPhp,
                name: "PHP"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        description: 'Online SLVL/UT',
        isLoaded: false,
        type: "Company"
    },
    {
        id: 2,
        title: 'Freelance 1',
        info: 'Payroll System (Ready-made or from scratch, free design suggestion) (PM me your offers and more details)',
        image: require('./images/payroll.webp'),
        languages: [
            {
                id: 1,
                icon: FaPhp,
                name: "PHP"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        description: 'Payroll System',
        isLoaded: false,
        type: 'Company'
    },
    {
        id: 3,
        title: 'ISO System',
        info: 'ISO 9001:2015 Internal Audit System (includes audit, policies, ordinance, performance, rating, reports, etc.)',
        image: require('./images/checklist.jpg'),
        languages: [
            {
                id: 1,
                icon: FaPhp,
                name: "PHP"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        description: 'Payroll System',
        isLoaded: false,
        type: 'Company'
    }
];

const graphics = [
    {
        id: 1,
        title: 'Kaskaseros',
        description: 'Graphic Design',
        info: 'I used Canva to create this.',
        image: require('./images/poster.webp'),
        languages: [
            {
                id: 1,
                icon: FaBrush,
                name: "Canva"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 2,
        title: 'Pet Service',
        description: 'Graphic Design',
        image: require('./images/pet_service.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 3,
        title: 'Bad Blood',
        description: 'Graphic Design',
        image: require('./images/movie_nagonus_award.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 4,
        title: 'Chili Cook-off',
        description: 'Graphic Design',
        image: require('./images/cookingnina.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 5,
        title: 'Xiomai Phone',
        description: 'Graphic Design',
        image: require('./images/phone_xiomai.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 6,
        title: 'Among Us Movie',
        description: 'Graphic Design',
        image: require('./images/among_us_movie.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 6,
        title: "90's Flashback",
        description: 'Graphic Design',
        image: require('./images/90ss.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
]

export { web, graphics, company }