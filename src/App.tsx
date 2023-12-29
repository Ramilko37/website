import '@mantine/core/styles.css'
import { Flex, MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { Footer } from './components/Footer/Footer'

import { RussianMap } from './components/RussianMap/RussianMap'
import { YandexMaps } from './components/YandexMaps/YandexMaps'
import NumbersBlock from './components/NumbersBlock/NumbersBlock'
import HowItWorks from './components/HowItWorks/HowItWorks'
import { NewsSlider } from './components/NewsSlider/NewsSlider'
import { ProjectsGallery } from './components/PojectsGallery/ProjectsGallery'




export default function App() {

    return (
        <MantineProvider theme={theme}>
            <Flex bg={'#f9fafc'} direction={'column'} w={'100vw'}>
                <Header />
                <HeroBlock />
                <NumbersBlock />
                <ProjectsGallery />
                <NewsSlider />
                <RussianMap />
                <YandexMaps />
                <Footer />
            </Flex>
        </MantineProvider>
    )
}
