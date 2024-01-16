import '@mantine/core/styles.css'
import { Flex, MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { YandexMaps } from './components/YandexMaps/YandexMaps'
import NumbersBlock from './components/NumbersBlock/NumbersBlock'
import { NewsSlider } from './components/NewsSlider/NewsSlider'
import { ProjectsGallery } from './components/PojectsGallery/ProjectsGallery'
import { PartnersCarousel } from './components/PartnersCarousel/PartnersCarousel'

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <Flex bg={'#f9fafc'} direction={'column'} w={'100vw'}>
                <Header />
                <HeroBlock />
                <NumbersBlock />
                <ProjectsGallery />
                <NewsSlider />
                <YandexMaps />
                <PartnersCarousel />
            </Flex>
        </MantineProvider>
    )
}
