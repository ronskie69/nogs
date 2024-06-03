import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    useMediaQuery,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import Dog from '../images/dog.gif'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import { scroller } from 'react-scroll'

function Landing({onToggleDog}) {

    const Hachiko = motion(Image)
    const theme = useColorModeValue("light", "dark")


    const [ smallScreen ] = useMediaQuery('(max-width: 720px)')
  return (
    <Flex
        h="90vh"
        id="landing"
        w="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
        direction="column"
    >
         <Heady
            fontweight="bold"
            as="h1"
            size="xl"
        >Hi! I'm Nogs!</Heady>
        <Hachiko
            src={Dog}
            dragConstraints={{
                left: 0, right: 0,
                top: 0, bottom: 0
            }}
            drag
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10}}
            dragElastic={0.3}
            boxSize='200px'
            position="absolute"
            top={20}
            zIndex={50}
        />
        <Text 
            display="inline-flex"
            fontFamily="Gruppo"
            fontSize="xl"
            fontWeight={"bold"}
            m={4}
        >
            I&nbsp;
            <Typewriter
                options={{
                    strings: [
                        "'m keen to details.",
                        "'m calm and optimistic.",
                        "'m disciplined.",
                        " value time."
                    ],
                    autoStart: true,
                    deleteSpeed: 1,
                    loop: true
                }}
            />
        </Text>
        <Button 
            rightIcon={<FaChevronRight/>}
            bgColor="#a0522d"
            color="#f4f5f6"
            borderRadius="30px"
            fontWeight="normal"
            fontSize={14}
            boxShadow={ theme === "dark" ? "dark-lg" : "lg" }
            w="150px"
            _hover={{ 
                background: '#a0522d',
                willChange: 'transform',
                transform: 'translateY(-10px)',
                transition: 0.3,
                filter: 'brightness(90%)',
            }}
            onClick={() => {
                scroller.scrollTo('intro', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInQuint',
                  offset: -100
              })}
            }
            _focus={{
                border: 'none'
            }}
            mt={2}
            >
            Get Started
        </Button>
    </Flex>
  )
}

export default Landing