import '@mantine/core/styles.css'
import { Burger, Flex, MantineProvider, Menu } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { Footer } from './components/Footer/Footer'
import { YandexMaps } from './components/YandexMaps/YandexMaps'
import NumbersBlock from './components/NumbersBlock/NumbersBlock'
import { NewsSlider } from './components/NewsSlider/NewsSlider'
import { ProjectsGallery } from './components/PojectsGallery/ProjectsGallery'
import { Link } from 'react-scroll'
import { useDisclosure } from '@mantine/hooks'
import classes from './components/Header/Header.module.css'
import { useRef } from 'react'

export default function App() {
    const [opened, { toggle }] = useDisclosure(false)
    const numbersRef = useRef(HTMLDivElement)

    return (
        <MantineProvider theme={theme}>
            <Flex bg={'#f9fafc'} direction={'column'} w={'100vw'}>
                <Header />

                <HeroBlock />

                <NumbersBlock />

                <ProjectsGallery />
                <NewsSlider />
                {/* <RussianMap /> */}
                <YandexMaps />
                <Footer />
            </Flex>
        </MantineProvider>
    )
}
