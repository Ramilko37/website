import { Flex, Title, Text, Badge, Image as Img } from '@mantine/core'
import permTitleImage from '../../images/campus.png'
import perm1 from '../../images/perm1.webp'
import perm2 from '../../images/perm2.webp'
import perm3 from '../../images/perm3.webp'
import perm4 from '../../images/perm4.webp'
import perm5 from '../../images/perm5.webp'
// import perm6 from '../../images/perm6.webp'
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
    const isMobile = useMediaQuery(`(max-width: 640px)`)
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
            text: 'Проект кампуса в г. Пермь',
        },
        {
            name: 'Ufa',
            image: ufa1,
            text: 'Проект кампуса в г. Уфа',
        },
        {
            name: 'Arkhangelsk',
            image: arhangelskTitleImage,
            text: 'Проект кампуса в г. Архангельск',
        },
        {
            name: 'Tumen',
            image: tumen,
            text: 'Проект кампуса в г. Тюмень',
        },
    ]

    const projectsData = useMemo(() => {
        switch (galleryType) {
            case ProjectsGalleryType.Perm:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: perm1,
                    },
                    {
                        title: 'Вместимость',
                        bullet1: 'Кол-во мест в общежитиях – 4 980 мест',
                        bullet2: 'Кол-во мест в гостинице – 120 мест',
                        bullet3: '',
                        image: perm2,
                    },
                    {
                        title: 'Потребность в инвестициях – 32 203 млн руб',
                        bullet1: 'Капитальный грант – 21 408 млн руб.',
                        bullet2: 'Старший долг – 9 042 млн руб.',
                        bullet3: 'Акционерный заем – 1 753 млн руб',
                        image: perm3,
                    },
                    {
                        title: 'Потребность в инвестициях – 32 203 млн руб',
                        bullet1: 'Проектирование – 1 год.',
                        bullet2: 'Строительство – 3 года',
                        bullet3: 'Эксплуатация – 18 лет',
                        image: perm4,
                    },
                    {
                        title: 'Экспертиза Прокампус',
                        bullet1: 'Финансовая экспертиза – 100 баллов',
                        bullet2: 'Юридическая экспертиза – 100 баллов',
                        bullet3: 'Строительная экспертиза – 56 баллов',
                        image: perm5,
                    },
                    // { text: 'ProjectImage', image: perm5 },
                    // { text: 'ProjectImage', image: perm6 },
                ]
            case ProjectsGalleryType.Ufa:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa1,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa2,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa3,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa4,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa5,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa6,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: ufa7,
                    },
                ]
            case ProjectsGalleryType.Tumen:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen2,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen3,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen4,
                    },
                ]
            case ProjectsGalleryType.Arhangelsk:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: arhangelskTitleImage,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: arhangelskImage,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: arhangelskImage2,
                    },
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
                            flexDirection: 'column',
                            flex: '0 1 40%',
                            height: '100%',
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        align={'center'}
                    >
                        <Text
                            w={'100%'}
                            c={'#002F6D'}
                            style={{
                                fontSize: '1.388888888888889vw',
                                lineHeight: '140%',
                                color: '#000000',
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                borderBottom: '3px solid #002F6D',
                            }}
                            size="xl"
                            fz={'32px'}
                            mb={'20px'}
                        >
                            {project.title}
                        </Text>
                        <Text
                            w={'100%'}
                            c={'#002F6D'}
                            style={{
                                fontSize: '1.388888888888889vw',
                                lineHeight: '140%',
                                color: '#000000',
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                            }}
                            size="xl"
                            fz={'22px'}
                        >
                            {project.bullet1}
                        </Text>
                        <Text
                            w={'100%'}
                            c={'#002F6D'}
                            style={{
                                fontSize: '1.388888888888889vw',
                                lineHeight: '140%',
                                color: '#000000',
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                            }}
                            size="xl"
                            fz={'22px'}
                        >
                            {project.bullet2}
                        </Text>
                        <Text
                            w={'100%'}
                            c={'#002F6D'}
                            style={{
                                fontSize: '1.388888888888889vw',
                                lineHeight: '140%',
                                color: '#000000',
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                            }}
                            size="xl"
                            fz={'22px'}
                        >
                            {project.bullet3}
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
                            textAlign: 'center',
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
                                            : 'linear-gradient(90deg, var(--mantine-color-blue-4), #002F6D 100%)'
                                    }
                                    style={{
                                        transition:
                                            'background-color 0.5s ease',
                                        padding: 0,
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
