import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Header } from './components/Header/Header'
import HeroBlock from './components/Hero/HeroBlock'
import { GridSection } from './components/GridSection/GridSection'

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <Header />
            <HeroBlock />
            <GridSection />
        </MantineProvider>
    )
}
