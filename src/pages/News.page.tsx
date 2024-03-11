import { Flex } from '@mantine/core'
import { NewsComponent } from '../components/NewsComponent/NewsComponent'

export const NewsPage = ({ onClick }: any) => {
    return (
        <Flex direction={'column'} w={'100%'} h={'100%'} justify={'center'}>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                m={'180px auto'}
                w={{ base: '90%', lg: '61vw' }}
                gap={'39px'}
            >
                <NewsComponent onClick={onClick} />
            </Flex>
        </Flex>
    )
}
