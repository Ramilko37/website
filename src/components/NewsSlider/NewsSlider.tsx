import { Flex, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { NewsCard } from '../NewsCard/NewsCard'
import vettaNewsImg from '../../images/vetta.png'
import businessClassNews from '../../images/businessClassNews.png'
import kommersant from '../../images/kommersant.png'
import ura from '../../images/ura.webp'
import properm from '../../images/properm.webp'
import ufa1 from '../../images/ufa_mk_1.jpg'
import ufa2 from '../../images/ufa_mk_2.jpg'
import tumen2 from '../../images/tumen_2.jpg'
import tumen3 from '../../images/tumen_3.jpg'
import sitronics from '../../images/Sitronics-Group.png'
import arkhangelsk from '../../images/arkhangelsk_news.webp'
import { useMediaQuery } from '@mantine/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import styles from './styles.module.css'
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
    {
        linkProps: {
            href: 'https://ura.news/news/1052708255',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: ura,
        title: 'Межвузовский кампус в Перми будут строить студенты',
        description:
            '«Благодаря трехстороннему соглашению студенты техникумов, колледжей и вузов Пермского края смогут привлекаться в составе студенческих отрядов „РСО“ к работе по строительству современного многофункционального студенческого Кампуса в Перми», — сообщается на сайте правительства Прикамья',
    },
    {
        linkProps: {
            href: 'https://properm.ru/news/2023-12-21/risovali-risovali-teper-stroim-postroim-chto-tam-s-zooparkom-vokzalom-galereey-3124500',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: properm,
        title: 'Рисовали-рисовали, теперь строим-построим. Что там с зоопарком, вокзалом, галереей?',
        description:
            'Много лет пермяков радовали красивыми картинками — будущих вокзалов, зоопарка, галереи, театров, спортивных комплексов, набережной. Устраивали конкурсы, награждали победителей за лучшие проекты того, сего. Период картинок, похоже, закончился. Начался период строек.',
    },
    {
        linkProps: {
            href: 'https://ura.news/news/1052708255',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: ufa1,
        title: 'В Уфе завершили строительство IQ-парка межвузовского кампуса',
        description:
            'В январе 2024 года в Уфе торжественно откроют первую очередь межвузовского кампуса. О завершении его строительства сообщил премьер-министр правительства Башкирии Андрей Назаров.',
    },
      {
        linkProps: {
            href: 'https://ura.news/news/1052708255',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: ufa2,
        title: 'В межвузовском кампусе в Уфе откроется мастерская киберфизических инноваций',
        description:
            'Она откроется на 15 этаже IQ-парка - первой очереди кампуса. В мастерской «Берлога» будет включаться площадку для сборки, программирования и эксплуатации БПЛА, лабораторию полезных игр и мастерскую киберфизики.',
    },
     {
        linkProps: {
            href: 'https://ura.news/news/1052708255',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: tumen2,
        title: 'Тюменский кампус создается не только для студентов',
        description:
            'В отдельном профильном блоке комплекса студенты и молодежь смогут заниматься в учебных кабинетах, библиотеке. Также подготовят оранжерею, музыкальный и декоративно-прикладной кабинеты. Кампус станет идеальной средой для талантливых ребят со всей России.',
    },
    {
        linkProps: {
            href: 'https://ura.news/news/1052708255',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: tumen3,
        title: 'В Тюмени все готово для строительства межуниверситетского кампуса',
        description:
            'Губернатор Тюменской области Александр Моор рассказал о подготовке к строительству межуниверситетского кампуса в регионе. Этот проект, реализуемый в рамках национального проекта «Наука и университеты», инициированного президентом Владимиром Путиным, призван создать уникальную образовательную и технологическую среду для талантливых студентов со всей страны.',
    },
     {
        linkProps: {
            href: 'https://dv1930.ru/medicine/poyavlenie-kampusa-arkticheskaya-zvezda-stanet-stimulom-dlya-razvitiya-v-pomore-medicinskoj-nauki/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: tumen3,
        title: 'Появление кампуса «Арктическая звезда» станет стимулом для развития в Поморье медицинской науки',
        description:
            'Межвузовский кампус мирового уровня «Арктическая звезда», который будет построен в Архангельске в 2027 году, станет уникальной научной и образовательной средой, призванной вывести научный потенциал региона на совершенно новый уровень.',
    },
     {
        linkProps: {
            href: 'https://dv1930.ru/medicine/poyavlenie-kampusa-arkticheskaya-zvezda-stanet-stimulom-dlya-razvitiya-v-pomore-medicinskoj-nauki/',
            target: '_blank',
            rel: 'noopener noreferrer',
        },

        image: arkhangelsk,
        title: 'Sitronics Group разработала концепцию цифровизации университетских кампусов',
        description:
            'Межвузовский кампус мирового уровня «Арктическая звезда», который будет построен в Архангельске в 2027 году, станет уникальной научной и образовательной средой, призванной вывести научный потенциал региона на совершенно новый уровень.',
    },
]



export const NewsSlider = () => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)

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
               className={styles.title}
               mb={'40px'}
            >
               Пресса о нас
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
