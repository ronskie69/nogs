import { Box, Text, Flex, HStack, VStack, Heading } from '@chakra-ui/react';
import React from 'react'
//styles
import '../css/timeline.css'

function Experience({work}){

    const title = work.filter((data, index, a) => a.findIndex(datax => ['year'].every(arr => datax[arr] == data[arr])) === index)

    return (
        <VStack>
            <Heading 
                fontSize={24}
                fontFamily="Coffee2"
                fontWeight="normal"
                textAlign={"center"}
                mt={2}
                mb={25}>
                { title.map(y => y.year) }
            </Heading>
            <Box 
                position="relative"
                _before={{
                    content: `""`,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: 'auto',
                    height: '100%',
                    width: '2px',
                    background: '#a0522d',
                    top: '0px'
                }}
                className="tcontainer"
            >
                {
                    work.map((exp, x) => {
                        return (
                            <Flex 
                                justifyContent="center" 
                                mb={15}
                                className="nth-child"
                                key={x}
                            >
                                <HStack w="50%" className='blank'></HStack>
                                <Box data-aos="fade-up" style={{
                                    width: '50%',
                                    paddingLeft: '20px',
                                    paddingRight: '10px',
                                    boxSizing: 'border-box',
                                    position: 'relative',
                                    }}>
                                    <span className='text-holder' style={{display: 'block', width: '100%'}}>
                                    <Heading 
                                        fontSize={23}
                                        fontFamily="Coffee2"
                                        fontWeight="normal"
                                        mb={5}>
                                        {exp.date}
                                    </Heading>
                                        <Text fontSize={"small"} mb={2}>{exp.position}</Text>
                                        <Text fontSize={"small"} mb={2} fontWeight="bold" color="#a0522d">{exp.company}</Text>
                                        <Text fontSize={"small"}>{exp.desc ? " — "+exp.desc : ""}</Text>
                                    </span>
                                    {
                                        (exp.desc) ?
                                        (
                                            <Box 
                                                className='circle-timeline'
                                                style={{
                                                    content: `""`,
                                                    position: 'absolute',
                                                    width: '12px',
                                                    height: '12px',
                                                    borderRadius: '50%',
                                                    left: '-6px',
                                                    background: '#a0522d',
                                                    top: '20px'
                                                }}></Box>
                                            ) : ""
                                    }
                                </Box>
                            </Flex>
                        )
                    })
                }
            </Box>
        </VStack>
    )
}

export default Experience;