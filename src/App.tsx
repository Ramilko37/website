import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { GridSection } from './components/GridSection/GridSection'
import { Footer } from './components/Footer/Footer'
import Stats from './components/Stats/Stats'
import { FeaturesGrid } from './components/FeaturesGrid/FeaturesGrid'
import { CardCarousel } from './components/Carousel/Carousel'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react'

export default function App() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
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
