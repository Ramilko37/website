import { FC, useState } from 'react'
import { Flex, Image, Title, Text, rem, BackgroundImage } from '@mantine/core'
import ReactCardFlip from 'react-card-flip'
import { RussianMap } from '../RussianMap/RussianMap'
import { useMediaQuery } from '@mantine/hooks'
import permBg from '../../images/Coat_of_Arms_of_Perm.svg.png'
import tyumenBg from '../../images/tyumen_gerb.png'
import ufaBg from '../../images/gerb_Ufa.png'
import arkhangelskBg from '../../images/arkhangelsk_gerb.png'
import permBack from '../../images/perm6.webp'
import tyumenBack from '../../images/tumen4.webp'
import ufaBack from '../../images/ufa7.webp'
import arkhangelskBack from '../../images/arhangelsk.webp'
import styles from './styles.module.css'
import { Link } from 'react-scroll'

const initialNumbers = [
    {
        id: 'perm',
        // num: '100k',
        icon: (
            <svg
                style={{ width: rem(80), height: rem(80) }}
                height="128px"
                viewBox="0 0 64 64"
                fill="none"
            >
                <path
                    d="M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                ></path>
            </svg>
        ),
        label: 'Кампус Пермь',
        bgImage: permBg,
        backImage: permBack,
    },
    {
        id: 'ufa',
        // num: '25+',
        icon: (
            <svg
                style={{ width: rem(80), height: rem(80) }}
                height="128px"
                viewBox="0 0 64 64"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" />
                <path d="M14 15h-8" />
            </svg>
        ),
        label: 'Кампус Уфа',
        bgImage: ufaBg,
        backImage: ufaBack,
    },
    {
        id: 'arkhangelsk',
        // num: '20га',
        icon: (
            <svg
                style={{ width: rem(80), height: rem(80) }}
                height="128px"
                viewBox="0 0 64 64"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 21h6" />
                <path d="M9 21v-18l-6 6h18" />
                <path d="M9 3l10 6" />
                <path d="M17 9v4a2 2 0 1 1 -2 2" />
            </svg>
        ),
        label: 'Кампус Архангельск',
        bgImage: arkhangelskBg,
        backImage: arkhangelskBack,
    },
    {
        id: 'tumen',
        // num: '5к+',
        icon: (
            <svg
                style={{ width: rem(80), height: rem(80) }}
                height="128px"
                viewBox="0 0 64 64"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
        ),
        label: 'Кампус Тюмень',
        bgImage: tyumenBg,
        backImage: tyumenBack,
    },
]

const NumbersBlock: FC = () => {
    const [isFlipped, setIsflipped] = useState<string | undefined>(undefined)
    const isMobile = useMediaQuery(`(max-width: 640px)`)

    const cardFlipHandler = (id: string) => () => {
        console.log('set os flipped')
        setIsflipped(id)
    }

    return (
        <Flex
            id={'numbers'}
            bg={'rgba(0, 0, 0, 0.03)'}
            direction={'column'}
            p={{ base: '20px 0 40px', md: '0 40px 90px' }}
            // h={'100%'}
            gap={{ base: '16px', lg: '24px' }}
            style={{ border: '1px solid red' }}
        >
            <Title
                style={{ textAlign: 'center' }}
                m={'0 auto'}
                c={'#002F6D'}
                fz={'40px'}
                fw={'100'}
                w={'100%'}
                mt={isMobile ? '-20px' : 0}
            >
                ГЕОГРАФИЯ ПРОЕКТОВ
            </Title>

            <RussianMap setIsflipped={setIsflipped} />

            <Flex
                w={'100%'}
                justify={'center'}
                gap={{ base: '8px', md: '16px', lg: '40px' }}
            >
                {initialNumbers.map((item, index) => {
                    console.log(item.bgImage, 141)
                    return (
                        <ReactCardFlip
                            key={index}
                            isFlipped={isFlipped === item.id}
                            flipDirection="horizontal"
                        >
                            <Flex
                                onClick={cardFlipHandler(item.id)}
                                key={`join-${index}`}
                                w={{ base: '100px', md: '150px', lg: '200px' }}
                                h={{ base: '100px', md: '150px', lg: '200px' }}
                                style={{
                                    background:
                                        'linear-gradient(-60deg, var(--mantine-color-blue-4) 0%, #002F6D 100%)',
                                    borderRadius: '16px',
                                    padding: '16px',
                                    color: '#fff',
                                    cursor: 'pointer',
                                }}
                                className={styles.card}
                                justify={'space-between'}
                                direction={'column'}
                            >
                                <Image
                                    w={{
                                        base: '24px',
                                        md: '48px',
                                        lg: '64px',
                                    }}
                                    src={item.bgImage}
                                />

                                <Text fz={{ base: '10px', md: '14px' }}>
                                    {item.label}
                                </Text>
                            </Flex>

                            <Link to={'projects'} smooth>
                                <Flex
                                    direction={'column'}
                                    key={`join-${index}`}
                                    w={{
                                        base: '100px',
                                        md: '150px',
                                        lg: '200px',
                                    }}
                                    h={{
                                        base: '100px',
                                        md: '150px',
                                        lg: '200px',
                                    }}
                                    className={styles.card}
                                    style={{
                                        border: '3px solid #002F6D',
                                        borderRadius: '16px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <BackgroundImage
                                        style={{ borderRadius: '12px' }}
                                        w={'100%'}
                                        h={'100%'}
                                        src={item.backImage}
                                    />
                                </Flex>
                            </Link>
                        </ReactCardFlip>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default NumbersBlock
