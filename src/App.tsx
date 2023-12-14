import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { GridSection } from './components/GridSection/GridSection'
import { Footer } from './components/Footer/Footer'
import Stats from './components/Stats/Stats'
import { FeaturesGrid } from './components/FeaturesGrid/FeaturesGrid'

export default function App() {
   
    return (
        <MantineProvider theme={theme}>
            <Header />
            <HeroBlock />
            <GridSection />
            <Stats />
            <FeaturesGrid />
          
            <Footer />
        </MantineProvider>
    )
}
