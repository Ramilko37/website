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
// import ufa6 from '../../images/ufa6.webp'
// import ufa7 from '../../images/ufa7.webp'
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
import { useMediaQuery } from '@mantine/hooks'
import { MdCurrencyRuble } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'
import { RxRulerSquare } from 'react-icons/rx'
import { LuClock4 } from 'react-icons/lu'
import { SquareIcon } from '../../images/icons/square-icon'
import { PeopleIcon } from '../../images/icons/people-icon'
import { СlockIcon } from '../../images/icons/clock-icon'

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
    const [galleryType] = useState<ProjectsGalleryType>(
        ProjectsGalleryType.Perm
    )
    // const { ref } = useHover()
    const imagesRef = useRef<HTMLDivElement>(null)

    // const galleryTypeClickHandler = (type: ProjectsGalleryType) => {
    //     setGalleryType(type)
    // }

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
                        icon: <RxRulerSquare color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Вместимость',
                        bullet1: 'Кол-во мест в общежитиях – 4 760 мест',
                        bullet2: 'Кол-во мест в гостинице – 329 мест',
                        bullet3: '',
                        image: perm2,
                        icon: <BsFillPeopleFill color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Потребность в инвестициях – 28 622 млн руб',
                        bullet1: 'Капитальный грант – 19 686 млн руб.',
                        bullet2: 'Старший долг – 7 616 млн руб.',
                        bullet3: 'Акционерный заем – 1 320 млн руб',
                        image: perm3,
                        icon: <MdCurrencyRuble color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Сроки концессионного соглашения – 22 года',
                        bullet1: 'Проектирование – 1 год.',
                        bullet2: 'Строительство – 3 года',
                        bullet3: 'Эксплуатация – 18 лет',
                        image: perm4,
                        icon: <LuClock4 color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Экспертиза Прокампус',
                        bullet1: 'Финансовая экспертиза – 100 баллов',
                        bullet2: 'Юридическая экспертиза – 100 баллов',
                        bullet3: 'Строительная экспертиза – 68 баллов',
                        image: perm5,
                        icon: <AiOutlineStock color="#002F6D" size={20} />,
                    },
                    // { text: 'ProjectImage', image: perm5 },
                    // { text: 'ProjectImage', image: perm6 },
                ]
            case ProjectsGalleryType.Ufa:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 152,7 тыс. м2',
                        bullet2: 'Площадь участка – 4,8 Га',
                        bullet3: '',
                        image: ufa1,
                        icon: <RxRulerSquare color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Вместимость',
                        bullet1: 'Кол-во мест в общежитиях – 3 004 мест',
                        bullet2: 'Кол-во мест в гостинице – 500 мест',
                        bullet3: '',
                        image: ufa2,
                        icon: <BsFillPeopleFill color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Потребность в инвестициях – 21 284 млн руб',
                        bullet1: 'Капитальный грант – 15 327 млн руб.',
                        bullet2: 'Старший долг – 4 775 млн руб.',
                        bullet3: 'Акционерный заем – 1 181 млн руб',
                        image: ufa3,
                        icon: <MdCurrencyRuble color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Сроки концессионного соглашения – 22 года',
                        bullet1: 'Проектирование – 1 год.',
                        bullet2: 'Строительство – 2 года',
                        bullet3: 'Эксплуатация – 22 лет',
                        image: ufa4,
                        icon: <LuClock4 color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Экспертиза Прокампус',
                        bullet1: 'Финансовая экспертиза – 70 баллов',
                        bullet2: 'Юридическая экспертиза – 96 баллов',
                        bullet3: 'Строительная экспертиза – н.д.',
                        image: ufa5,
                        icon: <AiOutlineStock color="#002F6D" size={20} />,
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
                        icon: <BsFillPeopleFill color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen2,
                        icon: <MdCurrencyRuble color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen3,
                        icon: <LuClock4 color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 167,3 тыс. м2',
                        bullet2: 'Площадь участка – 15,6 Га',
                        bullet3: '',
                        image: tumen4,
                        icon: <AiOutlineStock color="#002F6D" size={20} />,
                    },
                ]
            case ProjectsGalleryType.Arhangelsk:
                return [
                    {
                        title: 'Площадь объекта',
                        bullet1: 'Площадь зданий – 128,8 тыс. м2',
                        bullet2: 'Площадь участка – 5,1 Га',
                        bullet3: '',
                        image: arhangelskTitleImage,
                        icon: <RxRulerSquare color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Вместимость',
                        bullet1: 'Кол-во мест в общежитиях – 4 124 мест',
                        bullet2: 'Кол-во мест в гостинице – 132 мест',
                        bullet3: '',
                        image: arhangelskImage,
                        icon: <BsFillPeopleFill color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Потребность в инвестициях – 28 935 млн руб',
                        bullet1: 'Капитальный грант – 20 255 млн руб.',
                        bullet2: 'Старший долг – 7 299 млн руб.',
                        bullet3: 'Акционерный заем – 1 382 млн руб',
                        image: arhangelskImage2,
                        icon: <MdCurrencyRuble color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Сроки концессионного соглашения – 22 года',
                        bullet1: 'Проектирование – 1 год.',
                        bullet2: 'Строительство – 3 года',
                        bullet3: 'Эксплуатация – 18 лет',
                        image: arhangelskImage,
                        icon: <LuClock4 color="#002F6D" size={20} />,
                    },
                    {
                        title: 'Экспертиза Прокампус',
                        bullet1: 'Финансовая экспертиза – 100 баллов',
                        bullet2: 'Юридическая экспертиза – 100 баллов',
                        bullet3: 'Строительная экспертиза – 68 баллов',
                        image: arhangelskTitleImage,
                        icon: <AiOutlineStock color="#002F6D" size={20} />,
                    },
                ]
        }
    }, [galleryType])

    useEffect(() => {
        const preloadImages = () => {
            if (!projectsData) return
            if (imagesRef.current) {
                projectsData.forEach((project) => {
                    const img = new Image()
                    img.src = project.image
                })
            }
        }

        preloadImages()
    }, [projectsData])

    // const renderProjectDetails = (project: any) => {
    //     return (
    //         <Flex
    //             w={'80%'}
    //             direction={'column'}
    //             align="center"
    //             justify="center"
    //             style={{ borderBottom: '1px solid rgba(0, 47, 109, 0.3)' }}
    //             m={'auto'}
    //         >
    //             <Flex
    //                 gap={'12px'}
    //                 style={{ alignContent: 'center', justifyContent: 'center' }}
    //             >
    //                 {project.icon}
    //                 <Text
    //                     style={{
    //                         fontSize: '18px',
    //                         color: '#002F6D',
    //                         marginBottom: '10px',
    //                     }}
    //                 >
    //                     {project.title}
    //                 </Text>
    //             </Flex>

    //             <Flex direction={'column'}>
    //                 <Text style={{ fontSize: '16px', color: '#002F6D' }}>
    //                     {project.bullet1}
    //                 </Text>
    //                 <Text style={{ fontSize: '16px', color: '#002F6D' }}>
    //                     {project.bullet2}
    //                 </Text>
    //                 <Text style={{ fontSize: '16px', color: '#002F6D' }}>
    //                     {project.bullet3}
    //                 </Text>
    //             </Flex>
    //         </Flex>
    //     )
    // }

    const slides = useMemo(() => {
        return projectsData?.map((project, index) => (
            <Carousel.Slide w={'95%'} h={680} key={index}>
                <Flex
                    bg={project.image}
                    style={{
                        borderRadius: '20px',
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                    w={'100%'}
                    h={'100%'}
                />
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
                id={'projects'}
                direction={'column'}
                w={'100%'}
                h={isMobile ? '100%' : '100dvh'}
                justify={'center'}
            >
                <Carousel withIndicators includeGapInSize={false} loop={true}>
                    {mobileSlides}
                </Carousel>
            </Flex>
        )
    }

    return (
        <Flex
            id={'projects'}
            w={'1175px'}
            h={'100dvh'}
            justify={'center'}
            direction={'column'}
            m={'0 auto'}
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
                    {projectsNavBarData.map((project) => {
                        return (
                            <Flex>
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
                style={{ border: '1px solid red' }}

                // style={{ width: '60%', height: '100%' }}
            >
                <Flex direction={'column'} w={'30%'} gap={'24px'}>
                    <Flex
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
                            style={{ border: '1px dashed rgb(188, 210, 235)' }}
                            justify={'center'}
                            align={'center'}
                        >
                            <SquareIcon />
                        </Flex>
                        <Text c={'#012f6d'} fz={'50px'} fw={700} lh={'130%'}>
                            167 тыс м²
                        </Text>
                        <Text c={'#012f6d'} fz={'32px'} fw={400} lh={'130%'}>
                            Площадь объекта
                        </Text>
                    </Flex>
                    <Flex
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
                            style={{ border: '1px dashed rgb(188, 210, 235)' }}
                            justify={'center'}
                            align={'center'}
                        >
                            <PeopleIcon />
                        </Flex>
                        <Text c={'#012f6d'} fz={'50px'} fw={700} lh={'130%'}>
                            5100 мест
                        </Text>
                        <Text c={'#012f6d'} fz={'32px'} fw={400} lh={'130%'}>
                            Вместимость
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    w={'70%'}
                    h={'680px'}
                    style={{ maxWidth: '770px', overflow: 'hidden' }}
                >
                    <Carousel
                        w={'100%'}
                        h={'100%'}
                        includeGapInSize={false}
                        loop={true}
                        slideGap={'md'}
                    >
                        {slides}
                    </Carousel>
                </Flex>
            </Flex>
            <Flex w={'100%'} gap={'30px'} style={{ border: '1px solid red' }}>
                <Flex
                    justify={'center'}
                    align={'center'}
                    w={'50%'}
                    p={'55px 0 55px'}
                    style={{
                        borderRadius: '16px',
                        border: '1px solid rgb(188, 210, 235)',
                    }}
                >
                    <Flex
                        w={'80px'}
                        h={'80px'}
                        style={{ border: '1px dashed rgb(188, 210, 235)' }}
                        justify={'center'}
                        align={'center'}
                    >
                        <СlockIcon />
                    </Flex>
                    <Flex direction={'column'}>
                        <Text c={'#012f6d'} fz={'50px'} fw={700} lh={'130%'}>
                            167 тыс м²
                        </Text>
                        <Text c={'#012f6d'} fz={'32px'} fw={400} lh={'130%'}>
                            Площадь объекта
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    align={'center'}
                    w={'50%'}
                    p={'55px 0 55px'}
                    style={{
                        borderRadius: '16px',
                        border: '1px solid rgb(188, 210, 235)',
                    }}
                >
                    <Flex
                        w={'80px'}
                        h={'80px'}
                        style={{ border: '1px dashed rgb(188, 210, 235)' }}
                        justify={'center'}
                        align={'center'}
                    >
                        <PeopleIcon />
                    </Flex>
                    <Flex direction={'column'}>
                        <Text c={'#012f6d'} fz={'50px'} fw={700} lh={'130%'}>
                            5100 мест
                        </Text>
                        <Text c={'#012f6d'} fz={'32px'} fw={400} lh={'130%'}>
                            Вместимость
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
