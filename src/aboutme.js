import { 
    FaDog, 
    FaCat, 
    FaGraduationCap, 
    FaMale, 
    FaBriefcase, 
    FaHeart,
    FaBasketballBall,
    FaCoffee
 } from 'react-icons/fa'

 const what_can_i_do = [
     "Turn creative designs into websites",
     "Customer Service",
     "Software Maintenance",
     "Graphic Design",
     "Create aesthetic websites"
]

const services = [
    "Personal Website or Blog",
    "Business",
    "Accounting",
    "HRD / Payroll",
    "Production / Manufacturing",
    "Inventory",
    "Thesis / Capstone Project",
    "Geographic or Location-based",
    "Government"

]

const aboutMe =  [
    {
        id: 1,
        text: "Computer Science graduate in City College of Calamba (CCC)",
        icon: FaGraduationCap
    },
    // {
    //     id: 2,
    //     text: "Worked as a Non-voice Customer Service Representative",
    //     icon: FaBriefcase
    // },
    // {
    //     id: 2,
    //     text: "Coffee Lover and Gamer",
    //     icon: FaCoffee
    // },
    // {
    //     id: 3,
    //     text: "Gamer",
    //     icon: FaGamepad
    // },
    // {
    //     id: 3,
    //     text: "Completed an internship at City Hall of Calamba (CLDD)",
    //     icon: FaBriefcase
    // },
    // {
    //     id: 5,
    //     text: "You can call me Nagunos, Sunogsu or Nogsuu",
    //     icon: FaCat
    // },
    {
        id: 2,
        text: "Single",
        icon: FaMale
    },
    {
        id: 3,
        text: "Animal and Anime Lover",
        icon: FaDog
    },
    {
        id: 4,
        text: "Loves Basketball",
        icon: FaBasketballBall
    },
    {
        id: 5,
        text: "Loves to travel",
        icon: FaHeart
    },
]

const _2022 = [
    {
        id: 2,
        date: 'Sept 20',
        position: 'Programmer',
        desc: 'Develop web-based systems for department in the company and HR payroll system modification and maintenance',
        company: 'Roberts AIPMC',
        year: '2022'
    },
    {
        id: 1,
        date: 'Apr 5 - Aug 26',
        position: 'Intern',
        desc: 'Do paperworks, graphic design, front-desk support, assist clients and basic Web Development',
        company: 'City Hall of Calamba',
        year: '2022'
    },
] //latest first

const _2021 = [
    {
        id: 1,
        date: 'Apr 26 - May 17',
        position: 'Non-voice CSR',
        desc: 'Respond to customer complaints, assist them and provide correct information regarding purchases, updates and inquiries',
        company: 'ASM BPO',
        year: '2021'
    },
] //latest first

const work_exp = [ _2022, _2021]

export default { what_can_i_do, aboutMe, work_exp, services }