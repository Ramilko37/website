import { Flex, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { MOCKDATA } from '../../constants/constants'
import { useHover } from '@mantine/hooks'
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface INewsRow {
    title: string
    date: string
    link: string
}

const YEARS = [
    {
        year: '2024',
    },
    {
        year: '2023',
    },
]

const NewsRow = ({ title, date, link }: INewsRow) => {
    const { hovered, ref } = useHover()

    const handleLinkClick = (link: string) => () => {
        window.open(link)
    }
    return (
        <Flex
            ref={ref}
            direction={'column'}
            w={'100%'}
            gap={'16px'}
            pb={'36px'}
            style={{
                borderBottom: hovered ? '2px solid #233C91' : '',
                cursor: 'pointer',
            }}
            onClick={handleLinkClick(link)}
        >
            <Text c={'#012F6D'} fz={'32px'} fw={700} lh={'130%'}>
                {title}
            </Text>
            <Text c={'#012F6D'} fz={'23px'} opacity={0.5} fw={300} lh={'130%'}>
                {date}
            </Text>
        </Flex>
    )
}

export const NewsComponent = () => {
    const sortedMockData = MOCKDATA.sort((a, b) => b.date.localeCompare(a.date))
    const [activeYear, setActiveYear] = useState<string>('2024')
    const [data, setData] = useState(sortedMockData)
    const { hovered, ref } = useHover()
    const navigate = useNavigate()

    const handleYearClick = (year: string) => () => {
        setActiveYear(year)
    }

    useEffect(() => {
        setData(MOCKDATA.filter((item) => item.date.includes(activeYear)))
    }, [activeYear])

    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            m={{ base: '120px auto', lg: '0 auto' }}
            w={{ base: '90%', lg: '61vw' }}
            gap={'39px'}
        >
            <Flex
                direction={{ base: 'row', lg: 'column' }}
                gap={'24px'}
                m={{ base: '0', lg: '0 auto' }}
                style={{ cursor: 'pointer' }}
                wrap={'wrap'}
            >
                <Flex
                    ref={ref}
                    w={'170px'}
                    p={'10px'}
                    style={{
                        border: hovered
                            ? '1px solid #233C91'
                            : '1px solid #D7DBE4',
                        cursor: 'pointer',
                    }}
                    justify={'center'}
                    align={'center'}
                    onClick={() => navigate('/')}
                    gap={'20px'}
                >
                    <MdArrowBack size={'30px'} color={'#012f6d'} />
                    <Text fz={'32px'} fw={300} lh={'130%'} c={'#012f6d'}>
                        Назад
                    </Text>
                </Flex>
                {YEARS.map((year, key) => (
                    <Flex
                        key={key}
                        w={'170px'}
                        p={'10px'}
                        style={{
                            border:
                                year.year === activeYear
                                    ? '1px solid #233C91'
                                    : '1px solid #D7DBE4',
                        }}
                        onClick={handleYearClick(year.year)}
                    >
                        <Text fz={'32px'} fw={300} lh={'130%'}>
                            {year.year}
                        </Text>
                    </Flex>
                ))}
            </Flex>
            <Flex direction={'column'} w={'100%'} gap={'36px'}>
                {data.map((item, key) => {
                    return (
                        <NewsRow
                            key={key}
                            title={item.title}
                            date={item.date}
                            link={item.linkProps.href}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}
