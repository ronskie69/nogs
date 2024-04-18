import { Grid, GridItem, VStack, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import gallery from '../gallery'
import Lightbox from 'react-image-lightbox'

function Gallery() {
    //removed
    const [ imgIndex, setImgIndex ] = React.useState(0)
    const [ isOpen, setIsOpen ] = React.useState(false)
  return (
      <VStack>
          <Heading 
                as="h2"
                size="md"
                m="25px 0"
                fontFamily="lato"
                textAlign="center">
                My Gallery
            </Heading>
        <Grid 
            templateColumns="repeat(4, 75px)" 
            placeContent="center"
            w="fit-content"
            gap="5px"
            h="fit-content">
            {
                gallery.map((img, index) => {
                    return (
                        <GridItem>
                            <Image
                                src={img.image}
                                border='1px'
                                boxSize="75px"
                                onClick={() => {
                                    setImgIndex(index)
                                    setIsOpen(!isOpen)
                                }}
                                />
                        </GridItem>
                    )
                })
            }
        </Grid>
        {
            isOpen &&
            <Lightbox
                mainSrc={gallery[imgIndex].image}
                nextSrc={gallery[(imgIndex + 1) % gallery.length].image}
                onCloseRequest={() => setIsOpen(!isOpen)}
                onMoveNextRequest={() => setImgIndex((imgIndex+1)%gallery.length)}
                onMovePrevRequest={() => setImgIndex((imgIndex + gallery.length -1)%gallery.length)}
                imagePadding={30}
                enableZoom={false}
                prevSrc={gallery[(imgIndex + gallery.length - 1) % gallery.length]}
                imageCaption={gallery[imgIndex].caption}
            />     
        }
    </VStack>
  )
}

export default React.memo(Gallery)