import { Flex, BackgroundImage, Text } from '@mantine/core'
import { useMediaQuery, useHover } from '@mantine/hooks'

interface ICardComponentProps {
    name: string
    position: string
    image: string
}

export const TeamCardComponent = ({
    name,
    position,
    image,
}: ICardComponentProps) => {
    const isMobile = useMediaQuery(`(max-width: 580px)`)
    const { hovered, ref } = useHover()

    return (
        <div
            ref={ref}
            style={{
                boxShadow: ' 5px 5px 5px 0px rgba(0,0,0,0.3)',
                filter: hovered
                    ? 'drop-shadow(15px 15px 15px rgba(0,0,0,0.3))'
                    : 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition:
                    'filter 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
        >
            <Flex
                pos={'relative'}
                w={{ base: '250px', lg: '350px' }}
                h={{ base: '400px', lg: '500px' }}
                styles={{
                    root: {
                        flexDirection: 'column',

                        cursor: 'pointer',
                    },
                }}
            >
                <BackgroundImage w={'100%'} h={'100%'} src={image} />
                <Flex
                    pos={'absolute'}
                    w={'100%'}
                    direction={'column'}
                    bottom={10}
                    left={10}
                >
                    <Text c={'#fff'}>{name}</Text>
                    <Text c={'#fff'}>{position}</Text>
                </Flex>
            </Flex>
        </div>
    )
}
