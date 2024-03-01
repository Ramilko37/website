import { Box, Flex, Image, Popover, Text } from '@mantine/core'
import Map from '../../images/russian_map.svg'
import { useDisclosure, useInViewport } from '@mantine/hooks'
import perm from '../../images/perm1.webp'
import ufa from '../../images/ufa1.webp'

import arkhangelsk from '../../images/arhangelsk.webp'

import tumen from '../../images/tumen1.webp'

import styles from './styles.module.css'
import CountUp from 'react-countup'

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
    },
    {
        id: '2',
        coordinates: { top: '55%', left: '26%' },
        img: perm,
        text: 'Кампус Пермь',
    },
    {
        id: '3',
        coordinates: { top: '65%', left: '33%' },
        img: tumen,
        text: 'Кампус Тюмень',
    },
    {
        id: '4',
        coordinates: { top: '63%', left: '23%' },
        img: ufa,
        text: 'Кампус Уфа',
    },
]

export const RussianMap = () => {
    const { ref, inViewport } = useInViewport()
    const popoverStates = popoverData.map(() => useDisclosure(false))

    const handlePopoverOpen = (index: any) => {
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

    return (
        <Flex
            direction={'column'}
            w={{ base: '100%', lg: '1171px' }}
            m={'0 auto'}
            p={{ base: '90px 0 90px', lg: '220px 0 0' }}
            justify={'center'}
            align={'center'}
            gap={{ base: '16px', lg: '36px' }}
        >
            <Text className={styles.title}>География проектов</Text>
            <Flex w={'61wv'} pos={'relative'}>
                <Image src={Map} />
                {popoverData.map((item, index) => (
                    <Popover
                        key={item.id}
                        width={200}
                        position="bottom"
                        withArrow
                        shadow="md"
                        opened={popoverStates[index][0]}
                        onClose={() => handlePopoverClose(index)}
                    >
                        <Popover.Target>
                            <Box
                                id={item.id}
                                pos={'absolute'}
                                top={item.coordinates.top}
                                left={item.coordinates.left}
                                w={'10px'}
                                h={'10px'}
                                style={{ borderRadius: '50%' }}
                                bg={'#233C91'}
                                onMouseEnter={() => handlePopoverOpen(index)}
                                onMouseLeave={() => handlePopoverClose(index)}
                            ></Box>
                        </Popover.Target>
                        <Popover.Dropdown
                            w={'200px'}
                            style={{
                                borderRadius: '12px',
                                padding: 0,
                                background: '#fff',
                                pointerEvents: 'none',
                                backdropFilter: 'blur(3px)',
                            }}
                        >
                            <Flex
                                style={{ borderRadius: '12px' }}
                                direction={'column'}
                            >
                                <Image
                                    style={{
                                        borderTopRightRadius: '12px',
                                        borderTopLeftRadius: '12px',
                                    }}
                                    src={item.img}
                                />
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
                        </Popover.Dropdown>
                    </Popover>
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
                        // <ReactCardFlip
                        //     key={index}
                        //     isFlipped={isFlipped === item.id}
                        //     flipDirection="horizontal"
                        // >
                        //     <Flex
                        //         ref={ref}
                        //         direction={'column'}
                        //         w={'270px'}
                        //         h={'196px'}
                        //         bg={'rgb(35, 60, 145)'}
                        //         p={'32px 20px'}
                        //         style={{
                        //             borderRadius: '16px',
                        //         }}
                        //         onClick={cardFlipHandler(item.id)}
                        //         key={`join-${index}`}
                        //     >
                        //         <Text
                        //             c={'#fff'}
                        //             fz={'50px'}
                        //             fw={700}
                        //             lh={'100%'}
                        //         >
                        //             {inViewport ? (
                        //                 <Text
                        //                     c={'#fff'}
                        //                     fz={'50px'}
                        //                     fw={700}
                        //                     lh={'100%'}
                        //                 >
                        //                     <CountUp
                        //                         end={parseFloat(
                        //                             item.num.replace(
                        //                                 /[^0-9.]/g,
                        //                                 ''
                        //                             )
                        //                         )}
                        //                         duration={3}
                        //                     />
                        //                     +
                        //                 </Text>
                        //             ) : (
                        //                 item.num
                        //             )}
                        //         </Text>
                        //         <Text
                        //             c={'#fff'}
                        //             fz={'30px'}
                        //             fw={700}
                        //             lh={'100%'}
                        //         >
                        //             {item.sign}
                        //         </Text>
                        //         <Text
                        //             mt={'22px'}
                        //             c={'#fff'}
                        //             fz={'20px'}
                        //             fw={300}
                        //             lh={'130%'}
                        //             style={{
                        //                 alignItems: 'flex-end',
                        //             }}
                        //         >
                        //             {item.text}
                        //         </Text>
                        //     </Flex>

                        //     <Flex >
                        //         <Text>Prompt</Text>
                        //     </Flex>
                        // </ReactCardFlip>
                    )
                })}
            </Flex>
        </Flex>
    )
}
