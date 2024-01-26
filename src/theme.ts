import { createTheme } from '@mantine/core'

export const theme = createTheme({
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
    fontFamily: 'Geologica',
    colors: {
        ethalonBlue: [
            ' linear-gradient(-60deg,var(--mantine-color-blue-4) 0%, #002F6D 100%);',
        ] as any,
    },
})
