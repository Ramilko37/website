import { Flex, Modal, SimpleGrid, Image, Text } from '@mantine/core'
import { TeamCardComponent } from '../TeamCardComponent/TeamCardComponent'
import image from '../../images/ImageCrew.jpg'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

const data = [
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
    {
        name: 'Jay Zee',
        position: ' Vice President Chill & Relax',
        image: image,
    },
]

export const TeamComponent = () => {
    const [opened, { open, close }] = useDisclosure(false)
    const [activeImage, setActiveImage] = useState<string | null>(null)

    const handleCardClick = (activeImage: string) => () => {
        console.log('click', activeImage)
        setActiveImage(activeImage)
        open()
    }

    return (
        <>
            <SimpleGrid
                mt={'40px'}
                spacing={{ base: 20, lg: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 50 }}
                cols={{ base: 1, sm: 2, lg: 3 }}
                h={'100%'}
            >
                {data.map((item, key) => {
                    return (
                        <TeamCardComponent
                            key={key}
                            name={item.name}
                            position={item.position}
                            image={item.image}
                            handleCardClick={handleCardClick}
                        />
                    )
                })}
            </SimpleGrid>
            <Modal
                size={'30em'}
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
                    gap={{ base: '16px', lg: '24px' }}
                    style={{ display: 'block', float: 'left' }}
                >
                    <Image
                        style={{ float: 'left' }}
                        mr={'16px'}
                        w={'300'}
                        h={'250px'}
                        src={activeImage}
                    />
                    <Text>
                        Shawn Corey Carter (born December 4, 1969), known by his
                        stage name Jay-Z,[a] is an American rapper, record
                        producer, and entrepreneur.[8] Known for his involvement
                        in the creative and commercial success of numerous
                        artists,[9][10] he was named the greatest rapper of all
                        time by Billboard and Vibe in 2023.[11] He is the
                        founder and chairman of entertainment company Roc
                        Nation, and was the president and chief executive
                        officer of Def Jam Recordings from 2004 to 2007.[1
                    </Text>
                </Flex>
            </Modal>
        </>
    )
}
