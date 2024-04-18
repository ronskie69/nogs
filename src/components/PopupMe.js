import React from 'react'
import { IconButton, SlideFade, Avatar, Stack, Box, Text, Link } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function PopupMe({ isOpenMe, onToggleMe }) {

  const Messenger = motion(Box)

  const bounceVal ={
    duration: .9,
    yoyo: Infinity,
    ease: "easeInOut"
  }

  return (
    <SlideFade
      in={isOpenMe}
      offsetY="5px"
    >
      <Stack
        position={"fixed"}
        bottom="2"
        right="2"
        zIndex={"10"}
        background={"transparent"}
        >
      
            <Messenger
              position="relative"
              background="#f4f5f6"
              borderRadius="5px"
              h="fit-content"
              display="flex"
              flexDirection="column"
              w="100"
              boxShadow="lg"
              p="2"
              animate={{y:-6}}
              transition={{y:bounceVal }}
              _after={{
                content: `""`,
                position:"absolute",
                width:"0",
                bottom: "0",
                height:"0",
                alignSelf: "center",
                transform:"translateY(10px)",
                borderLeft:"10px solid transparent",
                borderRight:"10px solid transparent",
                borderTop: "15px solid #f4f5f6"
              }}
            >

              <IconButton
                  position="absolute"
                  top="0"
                  right="0"
                  transform={"translateY(-15px)"}
                  zIndex="10"
                  icon={<FaTimes/>}
                  size="xs"
                  color="#a0522d"
                  background="#f4f5f6"
                  borderWidth="1px"
                  borderColor="#f4f5f6"
                  isRound
                  _hover={{
                    background: '#f4f5f6'
                }}
                  onClick={onToggleMe}
              />

              <Text
                as="cite" 
                bgClip="text"
                bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" 
                fontSize={"sm"}>
                    <Text fontFamily="Japanan" textAlign="center">こんにちは、友達!</Text> What can I do for you?
                </Text>

              <Text
              as="cite" 
              bgClip="text"
              bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)" 
              fontSize={"sm"}>
                  Talk with me on
                  <Link 
                    href="https://m.me/sunog.an003/" 
                    size="sm"
                    target="_blank"
                    ml="1"
                    onClick={onToggleMe}
                    color="blue.600">Messenger</Link>
              </Text>

            </Messenger>
            <Link
              href="https://m.me/sunog.an003/"
              target="_blank"
              onClick={onToggleMe}
              alignSelf="center"
            >
              <Avatar
                  src={require('../images/ako.jpg')}
                  size="lg"
                  background="transparent"
                  boxShadow="md"
                  borderWidth={"2px"}
                  borderColor={'#a0522d'}
                  />
            </Link>
        </Stack>
    </SlideFade>
  )
}

export default PopupMe