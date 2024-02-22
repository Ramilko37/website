import { Flex, Title } from '@mantine/core'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { ContactIconsList } from '../ContactIconsList/ContactIconsList'
import { useMediaQuery } from '@mantine/hooks'

export const Contacts = () => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)

    return (
        <Flex
            id={'contacts'}
            w={{ base: '100%', lg: '61vw' }}
            h={'900px'}
            m={{ base: '0 auto', lg: '0 auto 132px' }}
            style={{ borderRadius: '16px', overflow: 'hidden' }}
            direction={'column'}
            justify={'center'}
            align={'center'}
            gap={'36px'}
            p={{ base: '40px', lg: '120px 0 0' }}
        >
            <Title c={'#012F6D'} fz={42} fw={700}>
                Контакты
            </Title>

            {isMobile ? (
                <Flex direction={'column'} w={'100%'} h={'100%'} gap={'24px'}>
                    <Flex
                        bg={'#fff'}
                        w={'100%'}
                        h={'100%'}
                        p={'24px'}
                        pos={'relative'}
                        style={{ borderRadius: '16px' }}
                    >
                        <ContactIconsList />
                    </Flex>

                    <YMaps>
                        <Map
                            overlay={true}
                            instanceRef={(ref) => {
                                ref && ref.behaviors.disable('scrollZoom')
                            }}
                            defaultState={{
                                center: [55.768355, 37.670241],
                                zoom: 15,
                                controls: ['zoomControl', 'fullscreenControl'],
                            }}
                            modules={[
                                'control.ZoomControl',
                                'control.FullscreenControl',
                            ]}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '16px',
                                filter: 'grayscale(1)',
                            }}
                        >
                            <Placemark
                                defaultGeometry={[55.768355, 37.670241]}
                            />
                        </Map>
                    </YMaps>
                </Flex>
            ) : (
                <Flex
                    w={'100%'}
                    h={'100%'}
                    style={{ borderRadius: '16px', overflow: 'hidden' }}
                >
                    <YMaps>
                        <Map
                            overlay={true}
                            instanceRef={(ref) => {
                                ref && ref.behaviors.disable('scrollZoom')
                            }}
                            defaultState={{
                                center: [55.768355, 37.670241],
                                zoom: 15,
                                controls: ['zoomControl', 'fullscreenControl'],
                            }}
                            modules={[
                                'control.ZoomControl',
                                'control.FullscreenControl',
                            ]}
                            style={{
                                width: '770px',
                                height: '100%',
                                borderRadius: '16px',
                                filter: 'grayscale(1)',
                            }}
                        >
                            <Placemark
                                defaultGeometry={[55.768355, 37.670241]}
                            />
                        </Map>
                    </YMaps>
                    <Flex
                        bg={'#fff'}
                        w={'35%'}
                        h={'100%'}
                        p={'44px 32px'}
                        pos={'relative'}
                    >
                        <ContactIconsList />
                    </Flex>
                </Flex>
            )}
        </Flex>
    )
}
