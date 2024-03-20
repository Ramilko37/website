import { Flex, Title, Button } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { NewsCard } from '../NewsCard/NewsCard'
import { useMediaQuery } from '@mantine/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import styles from './styles.module.css'
import 'swiper/css/pagination'
import { MOCKDATA } from '../../constants/constants'

interface INewsSlider {
    handleNewsBtnClick: () => void
}

export const NewsSlider = ({ handleNewsBtnClick }: INewsSlider) => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const newsData = MOCKDATA.sort((a, b) => b.date.localeCompare(a.date))

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: any) {
            return (
                '<span id="' +
                index +
                '" class="' +
                className +
                '">' +
                ' ' +
                '</span>'
            )
        },
    }

    return (
        <Flex
            id={'news'}
            h={'fit-content'}
            direction={'column'}
            w={isMobile ? '100%' : '80vw'}
            m={isMobile ? 0 : '0 auto 0'}
            align={'center'}
            pos={'relative'}
            gap={{ base: '24px', lg: '48px' }}
            bg={'rgb(248, 249, 251)'}
        >
            <Title className={styles.title}>ПРЕССА О НАС</Title>
            <Swiper
                pagination={pagination}
                modules={[Navigation, Pagination]}
                style={{
                    width: isMobile ? '100%' : '1170px',
                    paddingBottom: '40px',
                    borderRadius: '20px',
                }}
                spaceBetween={50}
                navigation={{
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                    disabledClass: 'swiper-button-disabled',
                }}
                slidesPerView={1}
                autoHeight={true}
            >
                {newsData.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <NewsCard
                            linkProps={feature.linkProps}
                            image={feature.image}
                            title={feature.title}
                            nextTitle={MOCKDATA[index + 1]?.title}
                            description={feature.description}
                            date={feature.date}
                            nextDate={MOCKDATA[index + 1]?.date}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Button
                style={{
                    fontSize: '22px',
                    borderRadius: '30px',
                    backgroundColor: '#233C91',
                    height: '56px',
                    width: '220px',
                }}
                onClick={handleNewsBtnClick}
            >
                Все новости
            </Button>
        </Flex>
    )
}
