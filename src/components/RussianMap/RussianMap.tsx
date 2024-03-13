import { Flex, HoverCard, Image, Text } from '@mantine/core'
import Map from '../../images/russian_map.svg'
import { useDisclosure, useInViewport } from '@mantine/hooks'
import perm from '../../images/perm1.webp'
import ufa from '../../images/ufa1.webp'
import arkhangelsk from '../../images/arhangelsk.webp'
import tumen from '../../images/tumen1.webp'
import styles from './styles.module.css'
import CountUp from 'react-countup'
import { Link } from 'react-scroll'

enum ProjectsGalleryType {
    Perm,
    Ufa,
    Tumen,
    Arhangelsk,
}

const initialNumbers = [
    {
        id: 'perm',
        num: '120+',
        sign: 'млрд',
        label: 'ПЕРМЬ',
        text: 'Инвестиций',
    },
    {
        id: 'ufa',
        num: '20+',
        sign: 'тыс',
        label: 'УФА',
        text: 'мест проживания',
    },
    {
        id: 'arkhangelsk',
        num: '300+',
        sign: 'млрд',
        label: 'АРХАНГЕЛЬСК',
        text: 'Вклад в ВВП',
    },
    {
        id: 'tumen',
        num: '450+',
        sign: 'тыс м²',
        label: 'ТЮМЕНЬ',
        text: 'новых  площадей',
    },
]
const popoverData = [
    {
        id: '1',
        coordinates: { top: '35%', left: '25%' },
        img: arkhangelsk,
        text: 'Кампус Архангельск',
        type: ProjectsGalleryType.Arhangelsk,
    },
    {
        id: '2',
        coordinates: { top: '55%', left: '26%' },
        img: perm,
        text: 'Кампус Пермь',
        type: ProjectsGalleryType.Perm,
    },
    {
        id: '3',
        coordinates: { top: '65%', left: '33%' },
        img: tumen,
        text: 'Кампус Тюмень',
        type: ProjectsGalleryType.Tumen,
    },
    {
        id: '4',
        coordinates: { top: '63%', left: '23%' },
        img: ufa,
        text: 'Кампус Уфа',
        type: ProjectsGalleryType.Ufa,
    },
]

interface IRussianMapProps {
    galleryTypeClickHandler: (type: ProjectsGalleryType) => void
}

export const RussianMap = ({ galleryTypeClickHandler }: IRussianMapProps) => {
    const { ref, inViewport } = useInViewport()
    const popoverStates = popoverData.map(() => useDisclosure(false))

    const handlePopoverOpen = (index: any) => {
        console.log('open')
        popoverStates.forEach((popoverState, i) => {
            if (i !== index) {
                popoverState[1].close()
            } else {
                popoverState[1].open()
            }
        })
    }

    const handlePopoverClose = (index: any) => {
        popoverStates[index][1].close()
    }

    const handleLocationHover =
        (index: any, type: ProjectsGalleryType) => () => {
            handlePopoverOpen(index)
            galleryTypeClickHandler(type)
        }

    return (
        <Flex
            direction={'column'}
            w={{ base: '100%', lg: '1171px' }}
            m={'0 auto'}
            justify={'center'}
            align={'center'}
            gap={{ base: '16px', lg: '36px' }}
        >
            <Text className={styles.title}>География проектов</Text>
            <Flex w={'61wv'} pos={'relative'}>
                <Image src={Map} />
                {popoverData.map((item, index) => (
                    <HoverCard
                        key={item.id}
                        width={200}
                        position="bottom"
                        shadow="md"
                        openDelay={200}
                        closeDelay={400}
                        onClose={() => handlePopoverClose(index)}
                    >
                        <HoverCard.Target>
                            <Flex
                                id={item.id}
                                pos={'absolute'}
                                top={item.coordinates.top}
                                left={item.coordinates.left}
                                w={'10px'}
                                h={'10px'}
                                style={{ borderRadius: '50%' }}
                                bg={'#233C91'}
                                onMouseEnter={handleLocationHover(
                                    index,
                                    item.type
                                )}
                                onMouseLeave={() => handlePopoverClose(index)}
                            ></Flex>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                            w={'200px'}
                            style={{
                                borderRadius: '12px',
                                padding: 0,
                                background: '#fff',
                                cursor: 'pointer',
                                backdropFilter: 'blur(3px)',
                            }}
                        >
                            <Flex
                                style={{
                                    borderRadius: '12px',
                                }}
                                direction={'column'}
                            >
                                <Link to="projects" smooth>
                                    <Image
                                        style={{
                                            borderTopRightRadius: '12px',
                                            borderTopLeftRadius: '12px',
                                        }}
                                        src={item.img}
                                    />
                                </Link>
                                <Flex w={'100%'} p={'8px'} justify={'center'}>
                                    <Text
                                        style={{ textAlign: 'center' }}
                                        fz={'12px'}
                                        fw={300}
                                        c={'#233C91'}
                                        size="sm"
                                    >
                                        {item.text}
                                    </Text>
                                </Flex>
                            </Flex>
                        </HoverCard.Dropdown>
                    </HoverCard>
                ))}
            </Flex>
            <Flex
                w={'100%'}
                gap={'20px'}
                wrap={{ base: 'wrap', lg: 'nowrap' }}
                justify={'center'}
            >
                {initialNumbers.map((item, index) => {
                    return (
                        <Flex
                            ref={ref}
                            direction={'column'}
                            w={{ base: '140px', lg: '270px' }}
                            h={{ base: '140px', lg: '196px' }}
                            bg={'rgb(35, 60, 145)'}
                            p={{ base: '32px 0 32px', lg: '32px 20px' }}
                            style={{
                                borderRadius: '16px',
                                textAlign: 'center',
                            }}
                            // onClick={cardFlipHandler(item.id)}
                            key={`join-${index}`}
                        >
                            <Text c={'#fff'} fz={'50px'} fw={700} lh={'100%'}>
                                {inViewport ? (
                                    <Text
                                        c={'#fff'}
                                        fz={{ base: '30px', lg: '56px' }}
                                        fw={700}
                                        lh={'100%'}
                                    >
                                        <CountUp
                                            end={parseFloat(
                                                item.num.replace(/[^0-9.]/g, '')
                                            )}
                                            duration={3}
                                        />
                                        +
                                    </Text>
                                ) : (
                                    item.num
                                )}
                            </Text>
                            <Text
                                c={'#fff'}
                                fz={{ base: '30px', lg: '28px' }}
                                fw={700}
                                lh={'100%'}
                            >
                                {item.sign}
                            </Text>
                            <Text
                                mt={{ base: 10, lg: '22px' }}
                                c={'#fff'}
                                fz={{ base: '14px', lg: '20px' }}
                                fw={300}
                                lh={'130%'}
                                style={{
                                    alignItems: 'flex-end',
                                }}
                            >
                                {item.text}
                            </Text>
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}
