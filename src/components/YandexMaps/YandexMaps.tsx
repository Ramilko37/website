import { Box, Flex, Text } from '@mantine/core'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { ContactIconsList } from '../ContactIconsList/ContactIconsList'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'

export const YandexMaps = () => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)

    return (
        <Flex id={'contacts'} w={'100vw'} mt={'40px'} h={'600px'}>
            <YMaps>
                <Map
                    overlay={true}
                    instanceRef={(ref) => {
                        ref && ref.behaviors.disable('scrollZoom')
                    }}
                    width={'100vw'}
                    height={'600px'}
                    defaultState={{
                        center: [55.768355, 37.670241],
                        zoom: 15,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    modules={[
                        'control.ZoomControl',
                        'control.FullscreenControl',
                    ]}
                    // style={{ filter: 'grayscale(1)' }}
                >
                    <Box pos={'relative'}>
                        <Placemark defaultGeometry={[55.768355, 37.670241]} />
                        <Flex
                            w={'300px'}
                            h={'fit-content'}
                            p={'24px'}
                            direction={'column'}
                            pos={'absolute'}
                            top={20}
                            right={isMobile ? '10%' : '30%'}
                            className={classes.contacts}
                            style={{
                                zIndex: 100,
                                borderRadius: '20px',
                                backgroundColor: `#f9fafc`,
                                border: '3px solid #002F6D',
                                color: '#002F6D',
                            }}
                        >
                            <Text
                                fz="lg"
                                fw={700}
                                className={classes.title}
                                c={'#002F6D'}
                            >
                                Контактная информация
                            </Text>

                            <ContactIconsList />
                        </Flex>
                    </Box>
                </Map>
            </YMaps>
        </Flex>
    )
}
