import { Flex, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import { Carousel } from '@mantine/carousel'
import { NewsCard } from '../NewsCard/NewsCard'
import vettaNewsImg from '../../images/vetta.png'
import businessClassNews from '../../images/businessClassNews.png'
import kommersant from '../../images/kommersant.png'

export const MOCKDATA = [
    {
        linkProps: {
            href: 'https://vetta.tv/news/society/v-permi-moskovskaya-kompaniya-postroit-mezhvuzovskiy-kampus/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        image: vettaNewsImg,
        title: 'В Перми московская компания построит межвузовский кампус',
        description:
            'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма» - концессионера строительства многофункционального студенческого кампуса в Перми, сообщает «Ъ-Прикамье». Ранее компания принадлежала АФК «Система». ',
    },
    {
        linkProps: {
            href: 'https://www.kommersant.ru/doc/6135368',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: kommersant,
        title: 'Для строительства межвузовского кампуса в Перми привлекли федерального девелопера «Эталон» ',
        description:
            'ООО «Кампус “Парма”», концессионер строительства межвузовского студенческого кампуса в Перми, сменило собственника. По данным «СПАРК-Интерфакс», с 24 июля единственным учредителем компании является ООО «Эталон Кампус». Ранее 100% долей в уставном капитале общества принадлежало основателю инвесткомпании АФК «Система» Владимиру Евтушенко.',
    },
    {
        linkProps: {
            href: 'https://vetta.tv/news/society/v-permi-moskovskaya-kompaniya-postroit-mezhvuzovskiy-kampus/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        image: businessClassNews,
        title: '​Концессионер межвузовcкого кампуса в Перми перешел в структуру федерального девелопера',
        description:
            'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма» - к«Эталон Кампус» (входит в структуру группы «Эталон»). Факт зафиксирован в ЕГРЮЛ 24 июля.',
    },
    {
        linkProps: {
            href: 'https://vetta.tv/news/society/v-permi-moskovskaya-kompaniya-postroit-mezhvuzovskiy-kampus/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        image: vettaNewsImg,
        title: 'В Перми московская компания построит межвузовский кампус',
        description:
            'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма» - концессионера строительства многофункционального студенческого кампуса в Перми, сообщает «Ъ-Прикамье». Ранее компания принадлежала АФК «Система». ',
    },
    {
        linkProps: {
            href: 'https://vetta.tv/news/society/v-permi-moskovskaya-kompaniya-postroit-mezhvuzovskiy-kampus/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: kommersant,
        title: 'Для строительства межвузовского кампуса в Перми привлекли федерального девелопера «Эталон» ',
        description:
            'ООО «Кампус “Парма”», концессионер строительства межвузовского студенческого кампуса в Перми, сменило собственника. По данным «СПАРК-Интерфакс», с 24 июля единственным учредителем компании является ООО «Эталон Кампус». Ранее 100% долей в уставном капитале общества принадлежало основателю инвесткомпании АФК «Система» Владимиру Евтушенко.',
    },
]

export const NewsSlider = () => {
    const slides = MOCKDATA.map((feature, index) => {
        return (
            <Carousel.Slide
                key={index}
                style={{ padding: '100px 100px 0px' }}
                mb={'20px'}
            >
                <NewsCard
                    linkProps={feature.linkProps}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                    key={index}
                />
            </Carousel.Slide>
        )
    })

    return (
        <Flex
            id={'news'}
            h={'100dvh'}
            mih={'500px'}
            direction={'column'}
            w={'80vw'}
            m={'0 auto'}
            justify={'center'}
        >
            <Title
                style={{ textAlign: 'start' }}
                ml={'100px'}
                mb={'0'}
                c={'#002F6D'}
                fz={'60px'}
                fw={'100'}
            >
                ПРЕССА О НАС
            </Title>
            <Carousel
                h={'fit-content'}
                slidesToScroll={3}
                slideSize={'33%'}
                loop
            >
                {slides}
            </Carousel>
        </Flex>
    )
}
