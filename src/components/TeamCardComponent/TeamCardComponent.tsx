import { Flex, BackgroundImage, Image, Text, Modal } from '@mantine/core'
import { useDisclosure, useHover } from '@mantine/hooks'
import { useState } from 'react'

interface ICardComponentProps {
    name: string
    position: string
    description: string
    image: string
}

export const TeamCardComponent = ({
    name,
    position,
    description,
    image,
}: ICardComponentProps) => {
    const { hovered, ref } = useHover()
    const [opened, { open, close }] = useDisclosure(false)
    const [activeImage, setActiveImage] = useState<string | null>(null)

    const handleCardClick = (activeImage: string) => () => {
        console.log('click', activeImage)
        setActiveImage(activeImage)
        open()
    }

    return (
        <>
            <div
                onClick={handleCardClick(image)}
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
                    w={{ base: '250px', lg: '300px' }}
                    h={{ base: '400px', lg: '400px' }}
                    styles={{
                        root: {
                            flexDirection: 'column',

                            cursor: 'pointer',
                        },
                    }}
                >
                    <BackgroundImage
                        w={'100%'}
                        h={'100%'}
                        src={image}
                        style={{ filter: 'grayscale(100%)' }}
                    />
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

            <Modal
                size={'40em'}
                opened={opened}
                onClose={close}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                transitionProps={{
                    transition: 'fade',
                    duration: 300,
                    timingFunction: 'linear',
                }}
            >
                <Flex
                    display={{ base: 'flex', lg: 'block' }}
                    direction={'column'}
                    gap={{ base: '16px', lg: '24px' }}
                    style={{
                        float: 'left',
                        textAlign: 'justify',
                    }}
                    p={{ base: '8px', md: '16px' }}
                >
                    <Image
                        style={{ float: 'left' }}
                        mr={'16px'}
                        w={{ base: '100%', md: '300px' }}
                        h={'250px'}
                        src={activeImage}
                    />
                    <Text c={'#002F6D'} fz={'16px'}>
                        {description}
                    </Text>
                </Flex>
            </Modal>
        </>
    )
}
