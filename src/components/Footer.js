import { HStack, IconButton, Link,Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa'

function Footer(props) {
  
  return (
    <VStack
        h="fit-content"
        w="full"
        id="footer"
        borderTop="1px"
        borderTopColor="#ddd"
        boxShadow={"md"}
        p={2.5}>
        <Text fontSize={13}>Edi wew ^_^. @2022 - {new Date().getFullYear()}</Text>
        {/* <Text fontSize={9}>I'm really sorry for using a dog image for my logo and branding.</Text> */}


            <HStack spacing={1}>
                <Link href="https://github.com/ronskie69" target="_blank"> 
                  <IconButton
                    isRound
                    size="lg"
                    background="transparent"
                    _focus={{ border: 'none', outline: 'none' }}
                    _hover={{
                      background: '#a0522d',
                      color: '#fff'
                    }}
                    icon={<FaGithub/>}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/karl-sunogan" target="_blank"> 
                  <IconButton
                    isRound
                    size="lg"
                    _hover={{
                      background: '#a0522d',
                      color: '#fff'
                    }}
                    _focus={{border: 'none'}}
                    background="transparent"
                    icon={<FaLinkedin/>}
                  />
                </Link>
                <Link href="https://www.facebook.com/sunog.an003" target="_blank"> 
                  <IconButton
                    isRound
                    size="lg"
                    _hover={{
                      background: '#a0522d',
                      color: '#fff'
                    }}
                    _focus={{border: 'none'}}
                    background="transparent"
                    icon={<FaLink/>}
                  />
                </Link>
            </HStack>
    </VStack>
  )
}

export default Footer