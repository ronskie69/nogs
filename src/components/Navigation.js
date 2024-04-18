import React from 'react'
import { 
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  useDisclosure,
  Box,
  Image,
  useMediaQuery,
  Link
} from '@chakra-ui/react'
import { FaMoon, FaSun, FaQuestionCircle, FaFacebook, FaBars, FaTimes } from 'react-icons/fa'
import NavDrawer from './NavDrawer'
import Heady from './Heady'
import { scroller } from 'react-scroll'

function Navigation({ onScroll, onToggleMe, isOpenMe}) {

  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue('light', 'dark')
  const navColor = useColorModeValue('#fff', '#1A202C')
  const [ smallScreen ] = useMediaQuery('(max-width: 768px)')

  const toggleRef = React.useRef();
  const { onClose, onOpen, isOpen} = useDisclosure()
  return (
    <Flex
      p="2"
      position="sticky"
      top={0}
      w="100%"
      zIndex={100}
      boxShadow={onScroll > 40 && "md"}
      bgColor={navColor}
    >
      <Box 
          display="inline-flex"
          onClick={() => {
              scroller.scrollTo('landing', {
                duration: 500,
                smooth: 'easeInOutQuart',
            })}
          }
          cursor="pointer">
        <Image 
          src={require('../images/logo.png')}
          boxSize="40px"
          mr={2}
        />
        {
          !smallScreen &&
          <Heady 
            fontSize="24px"
            alignSelf="center"
            fontWeight="extrabold"
          >
            Ron
        </Heady>
        }
      </Box>
      <Spacer/>
      <HStack spacing={1}>
        <IconButton
          onClick={onToggleMe}
          isRound
          visibility={isOpenMe ? "hidden" : "visible"}
          background="transparent"
          _focus={{border: 'none'}}
          _hover={{
            background: '#a0522d',
            color: '#fff'
          }}
          icon={<FaQuestionCircle/>}
        />
        <Link href="https://facebook.com/sunog.an003" target="_blank"> 
          <IconButton
            isRound
            _focus={{border: 'none'}}
            _hover={{
              background: '#a0522d',
              color: '#fff'
            }}
            background="transparent"
            icon={<FaFacebook/>}
          />
        </Link>
        <IconButton
          onClick={toggleColorMode}
          isRound
          _focus={{border: 'none'}}
          _hover={{
            background: '#a0522d',
            color: '#fff'
          }}
          background="transparent"
          icon={color === "light" ? <FaSun/> : <FaMoon/>}
        />
        <IconButton
          isRound
          _hover={{
            background: '#a0522d',
            color: '#fff'
          }}
          _focus={{border: 'none'}}
          ref={toggleRef}
          background="transparent"
          onClick={onOpen}
          icon={!isOpen?<FaBars/>:<FaTimes/>}
        />
      </HStack>
      <NavDrawer isOpen={isOpen} onClose={onClose}/>
    </Flex>
  )
}

export default Navigation