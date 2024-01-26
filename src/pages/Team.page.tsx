import { Flex, Title } from '@mantine/core'
import { TeamComponent } from '../components/TeamComponent/TeamComponent'

export const TeamPage = () => {
    return (
        <Flex
            bg={'rgba(0, 0, 0, 0.03)'}
            w={'100%'}
            justify={'center'}
            align={'center'}
            direction={'column'}
            p={{ base: '96px 20px 96px', md: '120px 40px 120px' }}
        >
            <Title
                style={{ textAlign: 'center' }}
                mb={'40px'}
                c={'#002F6D'}
                fz={'40px'}
                fw={'100'}
                w={'100%'}
            >
                КОМАНДА
            </Title>
            <TeamComponent />
        </Flex>
    )
}
