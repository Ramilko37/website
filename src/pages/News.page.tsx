import { Flex } from '@mantine/core'
import { Header } from '../components/Header/Header'
import { NewsComponent } from '../components/NewsComponent/NewsComponent'

export const NewsPage = () => {
    return (
        <Flex direction={'column'} w={'100%'} h={'100%'} justify={'center'}>
            <Header isTeam />
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                m={'180px auto'}
                w={{ base: '90%', lg: '61vw' }}
                gap={'39px'}
            >
                <NewsComponent />
            </Flex>
        </Flex>
    )
}
