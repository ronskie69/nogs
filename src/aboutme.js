import { 
    FaBullseye, 
    FaTeamspeak, 
    FaBriefcase, 
    FaRocketchat,
    FaToolbox
 } from 'react-icons/fa'

 const what_can_i_do = [
     "Turn creative designs into websites",
     "Customer Service",
     "Software Maintenance",
     "Graphic Design",
     "Create aesthetic websites",
     "Data Entry/Encoding",
]

const services = [
    "Personal Website or Blog",
    "Business",
    "Mobile App (Android)",
    "Finance / Accounting",
    "HRD / Payroll",
    "Production / Manufacturing",
    "Inventory",
    "Thesis / Capstone Project",
    "Geographic or Location-based",
    "Tourism",
    "Government",
]

const aboutMe =  [
    {
        id: 1,
        text: "Flexible",
        desc: "As a passionate developer, I'm always ready to adapt new challenges, grasp new concepts and thrive to different settings even it's under tight schedules or under pressure.",
        icon: FaToolbox
    },
    {
        id: 2,
        text: "Optimistic",
        desc: "Being an optimistic helps me to bounce back from setbacks and improve my focus and determination. I view unpleasant situations not as failures, but as an opportunity to learn and grow.",
        icon: FaBullseye
    },
    {
        id: 3,
        text: "Disciplined",
        desc: "I work by planning my day, setting priorities, and allocating sufficient time to each task. I understand the importance of deadlines and deliver it on time.",
        icon: FaBriefcase
    },
    {
        id: 4,
        text: "Persuasive",
        desc: "By understanding the viewpoints, concerns and suggestions of my customers, I can present my ideas in an effective way and make them see the value of what I am proposing. And this results to a good collaboration between me and my customers.",
        icon: FaRocketchat
    },
    {
        id: 5,
        text: "Team Player",
        desc: "I engage with my colleagues by expressing ideas, sharing knowledge and learn from them to improve and develop our collaboration. And when there is a conflict between me or with team members, I address it professionally to maintain the relationship among us.",
        icon: FaTeamspeak
    },
]

const _2024 = [
    {
        id: 1,
        date: '',
        position: '',
        desc: '',
        company: '',
        year: '2024'
    },
    {
        id: 2,
        date: 'Jan 02',
        position: 'Web Developer',
        desc: 'Specialized in Web Development using different technologies.',
        company: 'Roberts AIPMC',
        year: '2024'
    },
] //latest first

const _2022 = [
    {
        id: 2,
        date: 'Sep 20 - June 2024',
        position: 'Programmer',
        desc: 'Develop web-based systems for department in the company and Payroll System modification and maintenance',
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
]

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