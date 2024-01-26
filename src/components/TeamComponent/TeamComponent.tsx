import { SimpleGrid } from '@mantine/core'
import { TeamCardComponent } from '../TeamCardComponent/TeamCardComponent'
import image from '../../images/ImageCrew.jpg'

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
    return (
        <SimpleGrid
            mt={'40px'}
            spacing={{ base: 20, lg: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
            cols={{ base: 1, sm: 2, lg: 3 }}
        >
            {data.map((item, key) => {
                return (
                    <TeamCardComponent
                        key={key}
                        name={item.name}
                        position={item.position}
                        image={item.image}
                    />
                )
            })}
        </SimpleGrid>
    )
}
