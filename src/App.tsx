import '@mantine/core/styles.css'
import { Flex, MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { Footer } from './components/Footer/Footer'
import { StatsGroup } from './components/Stats/Stats'
import { FeaturesGrid } from './components/FeaturesGrid/FeaturesGrid'
import { RussianMap } from './components/RussianMap/RussianMap'
import { YandexMaps } from './components/YandexMaps/YandexMaps'



export default function App() {

    return (
        <MantineProvider theme={theme}>
            <Flex w={'100vw'} direction={'column'}>
                <Header />
                <HeroBlock />
                {/* <GridSection /> */}


                <StatsGroup />
                <FeaturesGrid />


                <RussianMap />
                <YandexMaps />
                <Footer />
            </Flex>
        </MantineProvider>
    )
}
