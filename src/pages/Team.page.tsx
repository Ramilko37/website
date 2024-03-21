import { Flex } from '@mantine/core'
import { TeamComponent } from '../components/TeamComponent/TeamComponent'

export const TeamPage = () => {
    return (
        <Flex
            bg={'rgba(0, 0, 0, 0.03)'}
            w={'100%'}
            justify={'center'}
            align={'center'}
            direction={'column'}
            p={{ base: '96px 20px 96px', lg: '180px 40px 120px' }}
            style={{ overflow: 'scroll' }}
        >
            <TeamComponent />
        </Flex>
    )
}
