import { Flex, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { NewsCard } from '../NewsCard/NewsCard'
import vettaNewsImg from '../../images/vetta.png'
import businessClassNews from '../../images/businessClassNews.png'
import kommersant from '../../images/kommersant.png'
import { useMediaQuery } from '@mantine/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import {} from '@tabler/icons-react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
    const isMobile = useMediaQuery(`(max-width: 580px)`)

    return (
        <Flex
            id={'news'}
            h={isMobile ? 'fit-content' : '900px'}
            mih={'500px'}
            direction={'column'}
            w={'80vw'}
            m={'0 auto'}
            justify={'center'}
            align={'center'}
            pt={{ base: '40x', md: '160px' }}
            pos={'relative'}
        >
            <Title
                style={{ textAlign: 'center' }}
                m={'40px auto 80px'}
                c={'#002F6D'}
                fz={'40px'}
                fw={'100'}
                w={'100%'}
            >
                ПРЕССА О НАС
            </Title>
            <Swiper
                modules={[Navigation]}
                style={{ width: '100%', height: '100%' }}
                spaceBetween={50}
                navigation={{
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                    disabledClass: 'swiper-button-disabled',
                }}
                slidesPerView={isMobile ? 1 : 3}
                autoHeight={true}
            >
                {MOCKDATA.map((feature, index) => (
                    <SwiperSlide
                        style={{ height: 'fit-content', padding: '20px' }}
                        key={index}
                    >
                        <NewsCard
                            linkProps={feature.linkProps}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                style={{
                    position: 'absolute',
                    top: isMobile ? '45%' : '53%',
                    left: isMobile ? '-12%' : '-7%',
                    zIndex: 100,
                }}
                className="swiper-button image-swiper-button-next"
            >
                <IoIosArrowBack
                    fill={'#002F6D'}
                    size={'70px'}
                    width={'100px'}
                    height={'100px'}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: isMobile ? '45%' : '53%',
                    right: isMobile ? '-12%' : '-7%',
                    zIndex: 100,
                }}
                className="swiper-button image-swiper-button-prev"
            >
                <IoIosArrowForward
                    fill={'#002F6D'}
                    size={'70px'}
                    width={'100px'}
                    height={'100px'}
                />
            </div>
        </Flex>
    )
}
