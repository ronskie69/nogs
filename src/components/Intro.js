import { Accordion, AccordionButton, useColorModeValue, AccordionIcon, Stack, AccordionItem, AccordionPanel, Collapse, Box, Center, Flex, Heading, List, ListIcon, ListItem, Text, useDisclosure, Avatar } from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import about from '../aboutme'
import Gallery from './Gallery'
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


function Intro() {

    const { aboutMe, what_can_i_do, services} = about
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })
    const theme = useColorModeValue("light", "dark")

  return (
    <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        id="intro"
        p={4}
    >
        <Heady fontweight={"bold"} data-aos="fade-up">
            Quick Start
        </Heady>
        <Box 
            m={3}
            p={4}
        >
            <Center m={4}>
                <Avatar
                    src={require('../images/meee.jpg')}
                    boxSize="75px"
                    background="transparent"
                    borderColor="#a0522d"
                    data-aos="fade-up"
                    showBorder={true}
                    borderWidth={"3px"}
                    />
            </Center>
            <Stack
                borderRadius="lg"
                maxW={"xl"}
                h="fit-content"
                data-aos="fade-up"
                boxShadow={theme==="dark"?"dark-lg": "lg"}
                position={"relative"}
                p={"2"}
                mt={8}
                mx={"auto"}
            >
                <Heady 
                    position="absolute" 
                    color="#a0522d" 
                    fontSize={"3xl"}
                    top="0"
                    left="0"
                    transform={"translate(-10px, -10px)"}
                >
                    <FaQuoteLeft />
                </Heady>
                <Box 
                p="2.5" 
                fontSize={"sm"}
                >
                    <Text as="b" bgClip="text" bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" mr="2">Time</Text>
                    <Text as="i" a mr="2">is a wide room for improvement. Never</Text>
                    <Text as="b"  bgClip="text" bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" mr="1">waste</Text>
                    <Text as="i" mr="1">it.</Text>
                </Box>
                <Text as="cite" w="100" mb={3}  textAlign="right" fontSize={"xs"}>Karl Aeron Sunogan, 2022</Text>
            </Stack>
            <Stack
                borderRadius="lg"
                maxW={"xl"}
                h="fit-content"
                boxShadow={theme==="dark"?"dark-lg": "lg"}
                position={"relative"}
                p={"2"}
                data-aos="fade-up"
                mt={8}
                mx={"auto"}
            >
                <Heady 
                    position="absolute" 
                    color="#a0522d" 
                    fontSize={"3xl"}
                    top="0"
                    right="0"
                    transform={"translate(-10px, -10px)"}
                >
                    <FaQuoteRight />
                </Heady>
                <Box p="2.5" 
                fontSize={"sm"}
                >
                    <Text as="i" mr="2">If your ship doesn't come in,  swim out to
                    <Text as="b"  bgClip="text" bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" ml="1">meet it.</Text></Text>
                </Box>
                <Text as="cite" w="100" mb={3} textAlign="right" fontSize={"xs"}>Jonathan Winters</Text>
            </Stack>
            <Heading 
                fontSize={21}
                m={12}
                mb={4}
                fontFamily="Coffee2"
                fontWeight="normal"
                data-aos="fade-up"
                textAlign="center">
                About Me
            </Heading>
            <List 
            spacing={8}
            px={0}
            className="list-about-me"
            >
                {
                    aboutMe.map(my => {
                        return (
                            <ListItem fontSize={13} key={my.id} data-aos="fade-up">
                                <Text fontWeight={"bold"}>
                                    <ListIcon as={my.icon} color="#a0522d" transform={"translateY(-1px)"}/>
                                    {my.text}
                                </Text>
                                <br/>
                                {my.desc}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
        {/* gallery
        <Gallery/> */}
        <Box 
            p={4}
            data-aos="fade-up"
            maxW="680px"
        >
            {/* <Heading 
                fontSize={21}
                fontFamily="Coffee2"
                fontWeight="normal"
                textAlign="center"
                mb={5}>
                My Journey
            </Heading>
            <List fontSize={13} mb={5}>
                <ListItem>
                    <Collapse in={isOpen} startingHeight={100} animateOpacity>
                        Started my journey at the peak of COVID-19 pandemic in 2020 and learned the basics of 
                        Web Development. Prior to our school activities,
                        I learned PHP and MySQL. I really struggled because I'm bad at
                        logic and in mathematics but managed to survive with perseverance and help of my colleagues.
                        As the time passes, web development became my hobby and I developed different programs and designs.
                        Until we have our thesis, I was selected and assigned as the programmer and our proposal for thesis was about tourism application in Calamba entitled
                        &nbsp;<Link href="https://youtu.be/TzI6sNZCaqo" color="#3399ff" textDecoration="underline" target="_blank">"Calamba Wonders"</Link>. 
                        Many nights and days of suffering that almost burst a vein in my brain
                        and it was all worth it. In 2022, we passed our thesis and I became more proud of myself as well to
                        my groupmates. In the same year, we also finished our 600-hour internship, completed my project and 
                        graduated afterwards. Now, I continue learning to further enhance my skills
                        that will help me to find a job that is suitable for me.
                    </Collapse>
                    <Heady onClick={onToggle} size="xs" fontFamily="Poppins" mt={2} cursor="pointer" 
                    _hover={{
                        textDecoration: 'underline'
                    }}
                    >
                        Show { isOpen ? 'Less' : 'More'}
                    </Heady>
                </ListItem>
            </List> */}
            <Heading 
                fontSize={21}
                mb={5}
                fontFamily="Coffee2"
                fontWeight="normal"
                data-aos="fade-up"
                textAlign="center">
                Why choose me?
            </Heading>
            <List fontSize={13} data-aos="fade-up">
                <ListItem>
                    My experience of operating the software tools is an advantage 
                    to me to showcase and incorporate my skills for the future organizations. I 
                    strongly believe that I can keep up with fast-paced environment and
                    fulfill all the needs of a business or an organization.
                </ListItem>
                <Accordion 
                    data-aos="fade-up"
                    boxShadow={ theme === "dark" ? "dark-lg" : "lg" }
                    allowMultiple mt={4}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton
                            _focus={{
                                border: 'none',
                                outline: 'none'
                            }}
                            >
                                <Box 
                                fontSize={13} 
                                flex="1"
                                textAlign="left">
                                    What Can I Do?
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <List spacing={3}>
                                {
                                    what_can_i_do.map((text, i) => {
                                        return (
                                            <ListItem key={i} fontSize={13} data-aos="fade-up">
                                                <ListIcon as={FaCheckCircle} color="#a0522d" />
                                                {text}
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </List>
            <Heading 
                fontSize={21}
                mb={5}
                mt={8}
                fontFamily="Coffee2"
                fontWeight="normal"
                data-aos="fade-up"
                textAlign="center">
                Freelancing and Services
            </Heading>
            <Text fontSize={13} data-aos="fade-up">
                I offer graphic design, application development services or web-based systems in very cheap and affordable minimum price such as:
            </Text>
            <List spacing={5} mt={6}>
                <Collapse in={isOpen} startingHeight={79} animateOpacity>
                    {
                        services.map((text, i) => {
                            return (
                                <ListItem key={i} fontSize={13} data-aos="fade-up">
                                    <ListIcon as={FaCheckCircle} color="#a0522d" />
                                    {text}
                                </ListItem>
                            )
                        })
                    }
                </Collapse>
                <Heady onClick={onToggle} size="xs" fontFamily="Poppins" mt={2} cursor="pointer" 
                _hover={{
                    textDecoration: 'underline'
                }}
                >
                    See { isOpen ? 'Less' : 'More'}
                </Heady>
            </List>
        </Box>
    </Flex>
  )
}

export default Intro