import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { GridSection } from './components/GridSection/GridSection'
import { Footer } from './components/Footer/Footer'
import { StatsGroup } from './components/Stats/Stats'
import { FeaturesGrid } from './components/FeaturesGrid/FeaturesGrid'
import { RussianMap } from './components/RussianMap/RussianMap'
import { YandexMaps } from './components/YandexMaps/YandexMaps'



export default function App() {
   
    return (
        <MantineProvider theme={theme}>
            <Header />
            <HeroBlock />
            <GridSection />
            <StatsGroup />
            <FeaturesGrid />
            <RussianMap />
            <YandexMaps /> 
            <Footer />
            </MantineProvider>
    )
}
