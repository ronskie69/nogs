import { VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Landing from './components/Landing'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Techs from './components/Techs'
import './css/app.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Heady from './components/Heady'

//libs
import AOS from 'aos'
import 'aos/dist/aos.css'
import PopupMe from './components/PopupMe'
import Experience from './components/Experience'

//obj
import about from './aboutme'

function App() {

  const [ scrollY, setScrollY ] = React.useState(0)
  const onScroll = () => setScrollY(window.scrollY);
  const { isOpen, onToggle } = useDisclosure()

  const { work_exp } = about

  React.useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: 'ease-in-out-cubic',
      once: true,
      delay: 100
    }); // punyetang bug

    setTimeout(() => {
      onToggle()
    }, 1000);

  },[])
  React.useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  },[scrollY]);

  return (
    <VStack className='app' position={"relative"}>
      <Navigation 
        onScroll={scrollY}
        isOpenMe={isOpen}
        onToggleMe={onToggle}/>
      <PopupMe isOpenMe={isOpen} onToggleMe={onToggle}/>
      <Landing onToggleMe={onToggle}/>
      <Intro/>
      <Heady fontweight={"bold"} mb={5} p={4} textAlign="center">Work Experience</Heady>
      {
        work_exp.map((work, i) => {
            return <Experience work={work} key={Math.random()*1999}/>
        })
      }
      <Projects/>
      <Techs/>
      <Contact/>
      <Footer/>
    </VStack>
  )
}

export default App