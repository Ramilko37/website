import { Flex, Text, Image } from '@mantine/core'
import { ITeamMemberProps } from '../TeamComponent/TeamComponent'

export const TeamMemberComponent = ({ teamMember }: ITeamMemberProps) => {
    console.log(teamMember, 5)

    return (
        <Flex direction={{ base: 'column', lg: 'row' }} w={'100%'} gap={'30px'}>
            <Image
                style={{ borderRadius: '12px' }}
                w={{ base: '100%', lg: '470px' }}
                h={{ base: '100%', lg: '485px' }}
                src={teamMember.image}
            />

            <Flex direction={'column'} gap={'16px'}>
                <Text
                    fz={{ base: '18px', lg: '32px' }}
                    fw={300}
                    lh={'130%'}
                    c={'#012F6D'}
                >
                    {teamMember.name}
                </Text>
                <Text
                    fz={{ base: '14px', lg: '20px' }}
                    fw={300}
                    lh={'130%'}
                    c={'#012F6D'}
                >
                    {teamMember.description}
                </Text>
            </Flex>
        </Flex>
    )
}
