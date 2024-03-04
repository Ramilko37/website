import { Flex, Text, Image as Img } from '@mantine/core'
import permTitleImage from '../../images/campus.png'
import perm1 from '../../images/perm1.webp'
import perm2 from '../../images/perm2.webp'
import perm3 from '../../images/perm3.webp'
import perm4 from '../../images/perm4.webp'
import perm5 from '../../images/perm5.webp'
import ufa1 from '../../images/ufa1.webp'
import ufa2 from '../../images/ufa2.webp'
import ufa3 from '../../images/ufa3.webp'
import ufa4 from '../../images/ufa4.webp'
import ufa5 from '../../images/ufa5.webp'
import tumen from '../../images/tumen1.webp'
import tumen2 from '../../images/tumen2.webp'
import tumen3 from '../../images/tumen3.webp'
import tumen4 from '../../images/tumen4.webp'
import ufaTitleImage from '../../images/ufa1.webp'
import tumenTitleImage from '../../images/tumen1.webp'
import arhangelskTitleImage from '../../images/arhangelsk.webp'
import arhangelskImage from '../../images/arhangelsk2.webp'
import arhangelskImage2 from '../../images/arhangelsk3.webp'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { SquareIcon } from '../../images/icons/square-icon'
import { PeopleIcon } from '../../images/icons/people-icon'
import { СlockIcon } from '../../images/icons/clock-icon'
import { MoneyIcon } from '../../images/icons/money-icon'

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
    const imagesRef = useRef<HTMLDivElement>(null)

    const galleryTypeClickHandler = (type: ProjectsGalleryType) => {
        setGalleryType(type)
    }

    // const mobileProjectsData = [
    //     {
    //         name: 'Perm',
    //         image: perm1,
    //         text: 'Проект кампуса в г. Пермь',
    //     },
    //     {
    //         name: 'Ufa',
    //         image: ufa1,
    //         text: 'Проект кампуса в г. Уфа',
    //     },
    //     {
    //         name: 'Arkhangelsk',
    //         image: arhangelskTitleImage,
    //         text: 'Проект кампуса в г. Архангельск',
    //     },
    //     {
    //         name: 'Tumen',
    //         image: tumen,
    //         text: 'Проект кампуса в г. Тюмень',
    //     },
    // ]

    const projectsData = useMemo(() => {
        switch (galleryType) {
            case ProjectsGalleryType.Perm:
                return [
                    {
                        title: '159 тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        title: '4760 мест',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        title: '28,6 млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        title: '22 года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Ufa:
                return [
                    {
                        title: '152,7 тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        title: '3004 мест',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        title: '21,2 млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        title: '25 лет',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Tumen:
                return [
                    {
                        title: '167,3 тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        title: '4980 мест',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        title: '32,2 млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        title: '22 года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
            case ProjectsGalleryType.Arhangelsk:
                return [
                    {
                        title: '128,8 тыс. м2',
                        bullet1: 'Площадь объекта',
                        icon: <SquareIcon />,
                    },
                    {
                        title: '4124 мест',
                        bullet1: 'Вместимость',
                        icon: <PeopleIcon />,
                    },
                    {
                        title: '28,9 млрд руб.',
                        bullet1: 'Объем инвестиций  ',
                        icon: <MoneyIcon />,
                    },
                    {
                        title: '22 года',
                        bullet1: 'Срок реализации',
                        icon: <СlockIcon />,
                    },
                ]
        }
    }, [galleryType])

    const imagesData = {
        [ProjectsGalleryType.Perm]: [
            perm1,
            perm2,
            perm3,
            perm4,
            perm5,
            permTitleImage,
        ],
        [ProjectsGalleryType.Ufa]: [
            ufa1,
            ufa2,
            ufa3,
            ufa4,
            ufa5,
            ufaTitleImage,
        ],
        [ProjectsGalleryType.Tumen]: [
            tumen,
            tumen2,
            tumen3,
            tumen4,
            tumenTitleImage,
        ],
        [ProjectsGalleryType.Arhangelsk]: [
            arhangelskImage,
            arhangelskImage2,
            arhangelskTitleImage,
        ],
    }

    useEffect(() => {
        const preloadImages = () => {
            const imagesToPreload = imagesData[galleryType]
            if (!imagesToPreload) return

            imagesToPreload.forEach((imageSrc) => {
                const img = new Image()
                img.src = imageSrc
            })
        }

        preloadImages()
    }, [galleryType])

    const slides = useMemo(() => {
        const currentImages = imagesData[galleryType] || []
        return currentImages?.map((imageSrc, index) => (
            <Carousel.Slide
                w={'100%'}
                h={{ base: 300, lg: 680 }}
                key={index}
                style={{ borderRadius: '16px' }}
            >
                <Flex
                    bg={imageSrc}
                    style={{
                        borderRadius: '16px',
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        border: '1px solid red',
                    }}
                    w={'100%'}
                    h={'100%'}
                />
            </Carousel.Slide>
        ))
    }, [galleryType, projectsData])

    // const mobileSlides = useMemo(() => {
    //     return mobileProjectsData.map((project, index) => (
    //         <Carousel.Slide key={index} style={{ borderRadius: '16px' }}>
    //             <Flex
    //                 direction={'column'}
    //                 justify={'center'}
    //                 m={'0 auto'}
    //                 w={'90%'}
    //                 h={'100%'}
    //                 style={{ borderRadius: '16px' }}
    //             >
    //                 <Img
    //                     fit={'contain'}
    //                     w={'100%'}
    //                     h={'auto'}
    //                     src={project.image}
    //                     style={{ borderRadius: '16px' }}
    //                 />
    //             </Flex>
    //         </Carousel.Slide>
    //     ))
    // }, [galleryType, projectsData])

    if (isMobile) {
        return (
            <Flex
                id={'projects'}
                direction={'column'}
                w={'100%'}
                h={isMobile ? '100%' : '100dvh'}
                justify={'center'}
                px={'40px'}
            >
                <Text
                    c={'#012f6d'}
                    fz={'30px'}
                    fw={'700'}
                    lh={'130%'}
                    mb={{ base: '16px', lg: '40px' }}
                    style={{ textAlign: 'center' }}
                >
                    Наши проекты
                </Text>
                <Flex
                    direction={'column'}
                    w={'100%'}
                    m={'0 auto 24px'}
                    justify={'center'}
                    align={'center'}
                    gap={'16px'}
                >
                    {projectsNavBarData.map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                onClick={() =>
                                    galleryTypeClickHandler(project.type)
                                }
                                style={{
                                    borderBottom:
                                        galleryType === project.type
                                            ? '3px solid rgb(35, 60, 145)'
                                            : '',
                                    transition: 'border-bottom 0.3s',
                                    textAlign: 'center',
                                }}
                                w={'fit-content'}
                            >
                                <Text
                                    c={'#012f6d'}
                                    fz={{ base: '22px', lg: '32px' }}
                                    fw={'400'}
                                    lh={'130%'}
                                    style={{ textAlign: 'center' }}
                                >
                                    {project.title}
                                </Text>
                            </Flex>
                        )
                    })}
                </Flex>
                <Carousel
                    loop
                    slideSize={300}
                    slideGap={0}
                    style={{ borderRadius: '16px' }}
                >
                    {slides}
                </Carousel>
                <Flex
                    direction={'column'}
                    w={'100%'}
                    gap={{ base: '16px', lg: '30px' }}
                    mt={'24px'}
                >
                    {projectsData.map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                direction={'column'}
                                justify={'center'}
                                align={'center'}
                                w={'100%'}
                                h={'fit-content'}
                                p={'20px'}
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid rgb(188, 210, 235)',
                                    textAlign: 'center',
                                }}
                            >
                                <Flex
                                    w={'60px'}
                                    h={'60px'}
                                    justify={'center'}
                                    align={'center'}
                                >
                                    {project.icon}
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text
                                        c={'#012f6d'}
                                        fz={30}
                                        fw={700}
                                        lh={'130%'}
                                    >
                                        {project.title}
                                    </Text>
                                    <Text
                                        c={'#012f6d'}
                                        fz={{ base: '14px', lg: '18px' }}
                                        fw={300}
                                        lh={'130%'}
                                    >
                                        {project.bullet1}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            id={'projects'}
            w={'1175px'}
            h={'100%'}
            justify={'center'}
            direction={'column'}
            m={'220px auto 0'}
        >
            <Flex
                ref={imagesRef}
                direction={'column'}
                w={'100%'}
                justify={'center'}
                align={'center'}
                m={'0 auto'}
                gap={'40px'}
                pt={isMobile ? '120px' : '120px'}
            >
                <Text c={'#012f6d'} fz={'42px'} fw={'700'} lh={'130%'}>
                    Наши проекты
                </Text>
                <Flex w={'100%'} m={'0 auto'} justify={'space-between'}>
                    {projectsNavBarData.map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                onClick={() =>
                                    galleryTypeClickHandler(project.type)
                                }
                                style={{
                                    borderBottom:
                                        galleryType === project.type
                                            ? '3px solid rgb(35, 60, 145)'
                                            : '',
                                    transition: 'border-bottom 0.3s',
                                }}
                            >
                                <Text
                                    c={'#012f6d'}
                                    fz={'32px'}
                                    fw={'400'}
                                    lh={'130%'}
                                >
                                    {project.title}
                                </Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>

            <Flex
                m={'37px auto 24px'}
                w={'100%'}
                gap={'24px'}
                justify={'space-between'}
                align={'center'}
            >
                <Flex direction={'column'} w={'30%'} gap={'24px'}>
                    {projectsData.slice(0, 2).map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                direction={'column'}
                                justify={'center'}
                                align={'center'}
                                w={'370px'}
                                h={'328px'}
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid rgb(188, 210, 235)',
                                }}
                            >
                                <Flex
                                    w={'80px'}
                                    h={'80px'}
                                    justify={'center'}
                                    align={'center'}
                                >
                                    {project.icon}
                                </Flex>
                                <Text
                                    c={'#012f6d'}
                                    fz={'50px'}
                                    fw={700}
                                    lh={'130%'}
                                >
                                    {project.title}
                                </Text>
                                <Text
                                    c={'#012f6d'}
                                    fz={'32px'}
                                    fw={300}
                                    lh={'130%'}
                                >
                                    {project.bullet1}
                                </Text>
                            </Flex>
                        )
                    })}
                </Flex>
                <Flex
                    w={'70%'}
                    h={'680px'}
                    style={{
                        maxWidth: '770px',
                        overflow: 'hidden',
                        borderRadius: '16px',
                    }}
                >
                    <Carousel
                        w={'100%'}
                        h={'100%'}
                        includeGapInSize={false}
                        loop={true}
                        slideGap={'md'}
                        style={{ borderRadius: '16px' }}
                    >
                        {slides}
                    </Carousel>
                </Flex>
            </Flex>
            <Flex w={'100%'} gap={'30px'}>
                {projectsData
                    .slice(2, projectsData.length)
                    .map((project, index) => {
                        return (
                            <Flex
                                key={index}
                                justify={'center'}
                                align={'center'}
                                w={'52%'}
                                p={'55px 40px 55px'}
                                gap={'32px'}
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid rgb(188, 210, 235)',
                                }}
                            >
                                <Flex
                                    w={'80px'}
                                    h={'80px'}
                                    justify={'center'}
                                    align={'center'}
                                    gap={'32px'}
                                >
                                    {project.icon}
                                </Flex>
                                <Flex direction={'column'}>
                                    <Text
                                        c={'#012f6d'}
                                        fz={'50px'}
                                        fw={700}
                                        lh={'130%'}
                                    >
                                        {project.title}
                                    </Text>
                                    <Text
                                        c={'#012f6d'}
                                        fz={'32px'}
                                        fw={300}
                                        lh={'130%'}
                                    >
                                        {project.bullet1}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    })}
            </Flex>
        </Flex>
    )
}
