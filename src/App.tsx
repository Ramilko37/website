import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Router } from './Router'
import './fonts/Gilroy-Regular.ttf'
import './fonts/Gilroy-Regular.woff'
import './fonts/Gilroy-Regular.woff2'

export default function App() {
    return (
        <MantineProvider theme={theme} >
            <Router />
        </MantineProvider>
    )
}
