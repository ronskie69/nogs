import { Heading } from '@chakra-ui/react'
import React from 'react'

function Heady({ fontweight, children, ...rest}) {

    let fw = !fontweight ? "bold" : fontweight
  return (
    <Heading
        fontWeight={fw}
        fontFamily="Coffee2"
        bgClip="text"
        bgGradient="linear(to-r, #cd7f32, #a0522d, #a0522d)"
        {...rest}
    >{children}
    </Heading>
  )
}

export default Heady