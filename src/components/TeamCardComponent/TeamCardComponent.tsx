import { Flex, Image, Text } from '@mantine/core'
import { TeamMember } from '../TeamComponent/TeamComponent'

interface ITeamCardComponentProps {
    teamMember: TeamMember
    handleCardClick: (id: number) => () => void
}

export const TeamCardComponent = ({
    teamMember,
    handleCardClick,
}: ITeamCardComponentProps) => {
    const { id, image, name, position } = teamMember

    return (
        <Flex
            w={'100%'}
            h={'fit-content'}
            m={0}
            direction={'column'}
            justify={'center'}
            gap={{ base: '8px', lg: '16px' }}
            style={{
                borderRadius: '12px',
                backdropFilter: 'grayscale(90%)',
                cursor: 'pointer',
                alignItems: 'center',
            }}
            onClick={handleCardClick(id)}
        >
            <Image
                w={{ base: '40vw', md: '30vw', lg: '15vw' }}
                mah={{ base: '160px', lg: '270px' }}
                style={{
                    borderRadius: '12px',
                    backdropFilter: 'grayscale(90%)',
                }}
                fit={'contain'}
                src={image}
            />
            <Text
                fz={{ base: '18px', lg: '28px' }}
                fw={300}
                lh={'130%'}
                c={'#012F6D'}
            >
                {name}
            </Text>
            <Text
                fz={{ base: '14px', lg: '20px' }}
                fw={300}
                lh={'130%'}
                c={'#012F6D'}
                opacity={0.5}
            >
                {position}
            </Text>
        </Flex>
    )
}
