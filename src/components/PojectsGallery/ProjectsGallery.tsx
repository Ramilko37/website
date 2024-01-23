import { Flex, Text, Badge, Image as Img } from '@mantine/core'

import permTitleImage from '../../images/campus.png'
import perm1 from '../../images/perm1.webp'
import perm2 from '../../images/perm2.webp'
import perm3 from '../../images/perm3.webp'
import perm4 from '../../images/perm4.webp'
import perm5 from '../../images/perm5.webp'
import perm6 from '../../images/perm6.webp'
import ufa1 from '../../images/ufa1.webp'
import ufa2 from '../../images/ufa2.webp'
import ufa3 from '../../images/ufa3.webp'
import ufa4 from '../../images/ufa4.webp'
import ufa5 from '../../images/ufa5.webp'
import ufa6 from '../../images/ufa6.webp'
import ufa7 from '../../images/ufa7.webp'
import tumen from '../../images/tumen.webp'
import tumen2 from '../../images/tumen2.webp'
import tumen3 from '../../images/tumen3.webp'
import tumen4 from '../../images/tumen4.webp'
import ufaTitleImage from '../../images/ufa1.webp'
import tumenTitleImage from '../../images/tumen.webp'
import arhangelskTitleImage from '../../images/arhangelsk.webp'
import arhangelskImage from '../../images/arhangelsk2.webp'
import arhangelskImage2 from '../../images/arhangelsk3.webp'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Carousel } from '@mantine/carousel'
import { useHover, useMediaQuery } from '@mantine/hooks'

enum ProjectsGalleryType {
    Perm,
    Ufa,
    Tumen,
    Arhangelsk,
}

const projectsNavBarData = [
    {
        type: ProjectsGalleryType.Perm,
        title: 'Кампус Пермь',
        image: permTitleImage,
    },
    {
        type: ProjectsGalleryType.Ufa,
        title: 'Кампус Уфа',
        image: ufaTitleImage,
    },
    {
        type: ProjectsGalleryType.Tumen,
        title: 'Кампус Тюмень',
        image: tumenTitleImage,
    },
    {
        type: ProjectsGalleryType.Arhangelsk,
        title: 'Кампус Архангельск',
        image: arhangelskTitleImage,
    },
]

export const ProjectsGallery = () => {
    const isMobile = useMediaQuery(`(max-width: 580px)`)
    const [galleryType, setGalleryType] = useState<ProjectsGalleryType>(
        ProjectsGalleryType.Perm
    )
    const { ref } = useHover()
    const imagesRef = useRef<HTMLDivElement>(null)

    const galleryTypeClickHandler = (type: ProjectsGalleryType) => {
        setGalleryType(type)
    }

    const mobileProjectsData = [
        {
            name: 'Perm',
            image: perm1,
            text: 'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма»',
        },
        {
            name: 'Ufa',
            image: ufa1,
            text: 'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма»',
        },
        {
            name: 'Arkhangelsk',
            image: arhangelskTitleImage,
            text: 'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма»',
        },
        {
            name: 'Tumen',
            image: tumen,
            text: 'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма»',
        },
    ]

    const projectsData = useMemo(() => {
        switch (galleryType) {
            case ProjectsGalleryType.Perm:
                return [
                    { text: 'Project', image: perm1 },
                    { text: 'Project', image: perm2 },
                    { text: 'ProjectImage', image: perm3 },
                    { text: 'ProjectImage', image: perm4 },
                    { text: 'ProjectImage', image: perm5 },
                    { text: 'ProjectImage', image: perm6 },
                ]
            case ProjectsGalleryType.Ufa:
                return [
                    { text: 'Project', image: ufa1 },
                    { text: 'Project', image: ufa2 },
                    { text: 'ProjectImage', image: ufa3 },
                    { text: 'ProjectImage', image: ufa4 },
                    { text: 'ProjectImage', image: ufa5 },
                    { text: 'ProjectImage', image: ufa6 },
                    { text: 'ProjectImage', image: ufa7 },
                ]
            case ProjectsGalleryType.Tumen:
                return [
                    { text: 'Project', image: tumen },
                    { text: 'Project', image: tumen2 },
                    { text: 'ProjectImage', image: tumen3 },
                    { text: 'ProjectImage', image: tumen4 },
                ]
            case ProjectsGalleryType.Arhangelsk:
                return [
                    { text: 'Project', image: arhangelskTitleImage },
                    { text: 'Project', image: arhangelskImage },
                    { text: 'ProjectImage', image: arhangelskImage2 },
                ]
        }
    }, [galleryType])

    useEffect(() => {
        const preloadImages = () => {
            if (imagesRef.current) {
                projectsData.forEach((project) => {
                    const img = new Image()
                    img.src = project.image
                })
            }
        }

        preloadImages()
    }, [projectsData])

    const slides = useMemo(() => {
        return projectsData.map((project, index) => (
            <Carousel.Slide key={index}>
                <Flex m={'0 auto'} w={'90%'} h={'70vh'}>
                    <Flex
                        p={'24px'}
                        style={{
                            flex: '0 1 40%',
                            height: '100%',
                            position: 'relative',
                        }}
                        align={'center'}
                    >
                        <Text
                            w={'100%'}
                            c={'#002f6d'}
                            style={{
                                fontSize: '1.388888888888889vw',
                                lineHeight: '140%',
                                color: '#000000',
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                            }}
                        >
                            Федеральный девелопер «Эталон Кампус», входящий в
                            группу «Эталон», стал единственным учредителем ООО
                            «Кампус «Парма»
                        </Text>
                    </Flex>
                    {/* <Image fit={'contain'} w={'auto'} h={'100%'} src={project.image} /> */}
                    <Flex
                        bg={project.image}
                        style={{
                            borderRadius: '20px',
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        w={'100%'}
                    />
                </Flex>
            </Carousel.Slide>
        ))
    }, [galleryType, projectsData])

    const mobileSlides = useMemo(() => {
        return mobileProjectsData.map((project, index) => (
            <Carousel.Slide key={index}>
                <Flex
                    direction={'column'}
                    justify={'center'}
                    m={'0 auto'}
                    w={'90%'}
                    h={'100%'}
                >
                    <Img
                        fit={'contain'}
                        w={'100%'}
                        h={'auto'}
                        src={project.image}
                    />
                    <Text
                        w={'100%'}
                        c={'#002f6d'}
                        style={{
                            fontSize: '24px',
                            lineHeight: '140%',
                            color: '#000000',
                            textAlign: 'start',
                            justifyContent: 'flex-start',
                            marginTop: '20px',
                        }}
                    >
                        {project.text}
                    </Text>
                </Flex>
            </Carousel.Slide>
        ))
    }, [galleryType, projectsData])

    if (isMobile) {
        return (
            <Flex
                direction={'column'}
                w={'100%'}
                h={isMobile ? '100%' : '100dvh'}
                justify={'center'}
            >
                {/* <Title
                    style={{ textAlign: 'center' }}
                    m={'40px auto'}
                    mb={'40px'}
                    c={'#002F6D'}
                    fz={'40px'}
                    fw={'100'}
                    w={'100%'}
                >
                    НАШИ ПРОЕКТЫ
                </Title> */}

                <Carousel includeGapInSize={false} loop={true}>
                    {mobileSlides}
                </Carousel>
            </Flex>
        )
    }

    return (
        <Flex
            id={'projects'}
            w={'100vw'}
            h={'100dvh'}
            gap={'24px'}
            justify={'center'}
            direction={'column'}
        >
            <Flex
                ref={imagesRef}
                direction={'column'}
                w={'100%'}
                justify={'center'}
                m={'0 auto'}
                gap={'20px'}
                pt={isMobile ? '120px' : '120px'}
            >
                {/* <Title
                    style={{ textAlign: 'center' }}
                    m={'0 auto'}
                    mb={'40px'}
                    c={'#002F6D'}
                    fz={'40px'}
                    fw={'100'}
                    w={'100%'}
                >
                    НАШИ ПРОЕКТЫ
                </Title> */}
                <Flex
                    w={'70%'}
                    px={'20px'}
                    m={'0 auto'}
                    mt={'120px'}
                    gap={'20px'}
                >
                    {projectsNavBarData.map((project, index) => {
                        return (
                            <Flex
                                ref={ref}
                                p={'8px'}
                                key={index}
                                onClick={() =>
                                    galleryTypeClickHandler(project.type)
                                }
                                w={'400px'}
                                h={'200px'}
                                bg={project.image}
                                style={{
                                    cursor: 'pointer',
                                    borderRadius: '20px',
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    filter:
                                        project.type === galleryType
                                            ? 'drop-shadow(16px 16px 20px gray)'
                                            : '',
                                    transition: 'all 0.3s ease', // Smooth transition for resizing
                                }}
                            >
                                <Badge
                                    radius={'xs'}
                                    bg={
                                        project.type === galleryType
                                            ? '#b455a0'
                                            : '#002f6d'
                                    }
                                    style={{
                                        transition:
                                            'background-color 0.5s ease',
                                    }}
                                >
                                    <Text
                                        c={'#fff'}
                                        fz={isMobile ? 'sm' : 'md'}
                                    >
                                        {' '}
                                        {project.title}
                                    </Text>
                                </Badge>
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
            <Carousel includeGapInSize={false} loop={true}>
                {slides}
            </Carousel>
        </Flex>
    )
}
