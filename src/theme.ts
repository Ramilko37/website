import { createTheme } from '@mantine/core'

export const theme = createTheme({
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
    fontFamily: 'Gilroy, sans-serif',

    colors: {
        primaryBlue: ['#012f6d'] as any,
        ethalonBlue: [
            ' linear-gradient(-60deg,var(--mantine-color-blue-4) 0%, #002F6D 100%);',
        ] as any,
    },
})
