import '@mantine/core/styles.css'
import { Flex } from '@mantine/core'
import { Header } from '../components/Header/Header'
import HeroBlock from '../components/Hero/HeroBlock'
import { YandexMaps } from '../components/YandexMaps/YandexMaps'
// import { NewsSlider } from '../components/NewsSlider/NewsSlider'
import { ProjectsGallery } from '../components/PojectsGallery/ProjectsGallery'
import { PartnersCarousel } from '../components/PartnersCarousel/PartnersCarousel'
import { About } from '../components/About/About'
import { Quote } from '../components/Quote/Quote'
import { RussianMap } from '../components/RussianMap/RussianMap'

export const HomePage = () => {
    return (
        <Flex bg={'rgba(0, 0, 0, 0.03)'} direction={'column'} w={'100vw'}>
            <Header />
            <HeroBlock />
            <About />
            <Quote />
            <RussianMap />
            <ProjectsGallery />
            {/* <NewsSlider /> */}
            <YandexMaps />
            <PartnersCarousel />
        </Flex>
    )
}
