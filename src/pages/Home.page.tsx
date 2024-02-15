import '@mantine/core/styles.css'
import { Flex } from '@mantine/core'
import { Header } from '../components/Header/Header'
import HeroBlock from '../components/Hero/HeroBlock'
import { YandexMaps } from '../components/YandexMaps/YandexMaps'
import NumbersBlock from '../components/NumbersBlock/NumbersBlock'
import { NewsSlider } from '../components/NewsSlider/NewsSlider'
import { ProjectsGallery } from '../components/PojectsGallery/ProjectsGallery'
import { PartnersCarousel } from '../components/PartnersCarousel/PartnersCarousel'
import { About } from '../components/About/About'
import { Services } from '../components/Services/Services'
import { Events } from '../components/Events/Events'

export const HomePage = () => {
    return (
        <Flex bg={'rgba(0, 0, 0, 0.03)'} direction={'column'} w={'100vw'}>
            <Header />
            <HeroBlock />
            <About />
            <NumbersBlock />
            <ProjectsGallery />
            <Events />
            <NewsSlider />
            <YandexMaps />
            <PartnersCarousel />
        </Flex>
    )
}
