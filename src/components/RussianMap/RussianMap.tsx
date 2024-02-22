import { Box, Button, Flex, Image, Popover, Text } from '@mantine/core'
import Map from '../../images/russian_map.svg'
import { useDisclosure, useInViewport } from '@mantine/hooks'

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

export const RussianMap = () => {
    // const [isFlipped, setIsflipped] = useState<string | undefined>(undefined)
    const { ref, inViewport } = useInViewport()
    const [opened, { close, open }] = useDisclosure(false)

    // const cardFlipHandler = (id: string) => () => {
    //     console.log('set os flipped')
    //     setIsflipped(id)
    // }

    return (
        <Flex
            direction={'column'}
            w={{ base: '100%', lg: '1171px' }}
            m={'0 auto'}
            p={{ base: '90px 0 90px', lg: '220px 0 0' }}
            justify={'center'}
            align={'center'}
            gap={'36px'}
        >
            <Text className={styles.title}>География проектов</Text>
            <Flex w={'61wv'} pos={'relative'}>
                <Image src={Map} />
                <Popover
                    width={200}
                    position="bottom"
                    withArrow
                    shadow="md"
                    opened={opened}
                    // styles={{
                    //     dropdown: {
                    //         position: 'absolute',
                    //         top: '35%',
                    //         left: '25%',
                    //     },
                    // }}
                >
                    <Popover.Target>
                        <Box
                            pos={'absolute'}
                            top={'35%'}
                            left={'25%'}
                            w={'10px'}
                            h={'10px'}
                            style={{ borderRadius: '50%' }}
                            bg={'#233C91'}
                            onMouseEnter={open}
                            onMouseLeave={close}
                        />
                    </Popover.Target>
                    <Popover.Dropdown
                        style={{
                            position: 'absolute',
                            top: '35%',
                            left: '25%',
                            pointerEvents: 'none',
                        }}
                    >
                        <Text size="sm">
                            This popover is shown when user hovers the target
                            element
                        </Text>
                    </Popover.Dropdown>
                </Popover>

                <Popover>
                    <Popover.Target>
                        <Box
                            pos={'absolute'}
                            top={'55%'}
                            left={'26%'}
                            w={'10px'}
                            h={'10px'}
                            style={{ borderRadius: '50%' }}
                            bg={'#233C91'}
                            onMouseEnter={open}
                            onMouseLeave={close}
                        />
                    </Popover.Target>
                    <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                        <Text size="sm">
                            This popover is shown when user hovers the target
                            element
                        </Text>
                    </Popover.Dropdown>
                </Popover>

                <Popover>
                    <Popover.Target>
                        <Box
                            pos={'absolute'}
                            top={'65%'}
                            left={'33%'}
                            w={'10px'}
                            h={'10px'}
                            style={{ borderRadius: '50%' }}
                            bg={'#233C91'}
                            onMouseEnter={open}
                            onMouseLeave={close}
                        />
                    </Popover.Target>
                    <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                        <Text size="sm">
                            This popover is shown when user hovers the target
                            element
                        </Text>
                    </Popover.Dropdown>
                </Popover>

                <Popover>
                    <Popover.Target>
                        <Box
                            pos={'absolute'}
                            top={'63%'}
                            left={'23%'}
                            w={'10px'}
                            h={'10px'}
                            style={{ borderRadius: '50%' }}
                            bg={'#233C91'}
                            onMouseEnter={open}
                            onMouseLeave={close}
                        />
                    </Popover.Target>
                    <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                        <Text size="sm">
                            This popover is shown when user hovers the target
                            element
                        </Text>
                    </Popover.Dropdown>
                </Popover>
            </Flex>
            <Flex
                w={'100%'}
                gap={'30px'}
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
                                        fz={{ base: '30px', lg: '50px' }}
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
                                fz={{ base: '30px', lg: '50px' }}
                                fw={700}
                                lh={'100%'}
                            >
                                {item.sign}
                            </Text>
                            <Text
                                mt={{ base: 10, lg: '22px' }}
                                c={'#fff'}
                                fz={{ base: '16px', lg: '20px' }}
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
