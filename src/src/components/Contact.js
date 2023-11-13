import { Stack, Box, Heading, HStack, Text, IconButton, Flex, useMediaQuery, Link } from '@chakra-ui/react'
import React from 'react'
import Heady from './Heady'
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa'
import ContactForm from './ContactForm'

function Contact() {

    const [ smallScreen ] = useMediaQuery('(max-width: 720px)')

  return (
    <Stack
        p={8}
        w="full"
        id="contact"
        textAlign="center"
        spacing={8}
    >
        <Heady fontweight="normal" data-aos="fade-up" data-aos-duration="1300">
            Connection
        </Heady>
        <Flex
            p={4}
            data-aos="fade-up"
            data-aos-duration="1300"
            justifyContent={smallScreen ? "center" : "space-evenly"} 
            direction={smallScreen ? "column" : "row"}>
            <Box mt={4}>
                <Heading 
                    fontSize={21}
                    fontFamily="Coffee2"
                    fontWeight="normal"
                >Contact Me</Heading>
                <HStack spacing={4} mt={5} fontSize={14}>
                    <IconButton 
                        icon={<FaEnvelope/>}
                        size="xs"
                        _hover={{
                            background: '#a0522d',
                            color: '#fff'
                        }}
                        background="transparent"
                    />
                    <Text>Email: </Text>
                    <Link href="mailto:sunogan77@gmail.com"><Text>sunogan77@gmail.com</Text></Link>
                </HStack>
                <HStack fontSize={14} spacing={4} mt={2}>
                    <IconButton 
                        icon={<FaPhoneSquare/>}
                        size="xs"
                        _hover={{
                            background: '#a0522d',
                            color: '#fff'
                        }}
                        background="transparent"
                    />
                    <Text>Globe: </Text>
                    <Link href="tel:+639774002607"><Text>0977 400 2607</Text></Link>
                </HStack>
                <HStack fontSize={14} spacing={4} mt={2} mb="4.5rem">
                    <IconButton 
                        icon={<FaPhoneSquare/>}
                        size="xs"
                        _hover={{
                            background: '#a0522d',
                            color: '#fff'
                        }}
                        background="transparent"
                    />
                    <Text>DITO: </Text>
                    <Link href="tel:+639929022559"><Text>0992 902 2559</Text></Link>
                </HStack>
            </Box>
            <ContactForm/>
        </Flex>
    </Stack>
  )
}

export default Contact