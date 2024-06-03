import React from 'react'
import { 
    Box,
    Image,
    Heading,
    Stack,
    Text,
    Button,
    IconButton,
    Link,
    useColorModeValue,
    Spacer
} from '@chakra-ui/react'
import { FaLink, FaDownload } from 'react-icons/fa'
import LightBox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

function ProjectCard({project, allProjects, index}) {
    
    const [ isOpen, setOpen ] = React.useState(false);
    const [ currentImg, setCurrentImg ] = React.useState(0)
    const theme = useColorModeValue("light", "dark")


    // for file donwloads (ayaw kasi minsan gumana, tang in*)
    const onDownload = (file, title) => {
        let link = document.createElement('a');
        link.href = file;
        link.download = title+'.xlsx'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }

  return (
    <Box
        boxShadow={theme==="dark"?"dark-lg": "lg"}
        borderRadius="lg"
        textAlign="center"
        className={`project-card ${project.type}`}
        p={3}
        data-aos="fade-up"
        h="fit-content"
        w="210px"
        position={"relative"}
    >
    <Image
        zIndex="10"
        w="full"
        h="140px"
        border="#ccc"
        borderRadius={2}
        boxShadow="xl"
        mb="4"
        objectFit={'cover'}
        src={project.image}
        onClick={() => {
            setCurrentImg(index)
            setOpen(!isOpen)
        }}
    />
        {
            (project.type === "Website" || project.type === "Company" || project.type === "Data") &&
            <>
                <Heading
                fontSize={"md"}>
                    {project.title}
                </Heading>
                <Text
                    p={2}
                    fontSize={13}
                >{project.description}
                </Text>
                <Stack direction={"row"}>
                    {
                        
                        project.languages.map((lang, i) => {
                            return <Button 
                            key={i} 
                            fontSize={11}
                            bgColor="#a0522d"
                            color="#fff"
                            transition="ease-in-out .4s"
                            _hover={{
                                color: '#a0522d',
                                background: '#fff'
                            }}
                            fontWeight="normal"
                            leftIcon={<lang.icon/>} 
                            size="sm">
                                {lang.name}
                            </Button>
                        })
                    }
                    {
                    project.type === "Website" ?
                    <Link href={project.link} target="_blank">
                        <IconButton
                            icon={<FaLink/>}
                            size="sm"
                            bgColor="#a0522d"
                            transition="ease-in-out .4s"
                            _hover={{
                                color: '#a0522d',
                                background: '#fff'
                            }}
                            color="#fff"
                        />
                    </Link>
                    : ""
                    }
                    {
                    project.type === "Data" ?
                    <Link href={project.file} download={project.title+".xlsx"} display={"block"} ms={"auto"} target="_blank"> 
                        <IconButton
                            icon={<FaDownload/>}
                            size="xs"
                            bgColor="#a0522d"
                            transition="ease-in-out .4s"
                            _hover={{
                                color: '#a0522d',
                                background: '#fff'
                            }}
                            color="#fff"
                        />
                    </Link>
                    : ""
                    }
                </Stack>
            </>
            
        }
        {
            isOpen &&
            <LightBox
                mainSrc={allProjects[currentImg].image}
                nextSrc={allProjects[(currentImg + 1) % allProjects.length].image}
                prevSrc={allProjects[(currentImg + allProjects.length - 1) % allProjects.length]}
                onCloseRequest={() => setOpen(!isOpen)}
                onMoveNextRequest={() => setCurrentImg((currentImg+1)%allProjects.length)}
                onMovePrevRequest={() => setCurrentImg((currentImg + allProjects.length -1)%allProjects.length)}
                imagePadding={30}
                enableZoom={true}
                imageCaption={allProjects[currentImg].info}
            />
                
                
        }
    </Box>
  )
}

export default React.memo(ProjectCard)

//setCurrentSong(songs[(currentSong + 1) % songs.length].song)
//allProjects[(currentImg + allProjects.length - 1) % allProjects.length]