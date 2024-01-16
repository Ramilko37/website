import { Box, Flex, Text } from '@mantine/core'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { ContactIconsList } from '../ContactIconsList/ContactIconsList'
import classes from './styles.module.css'

export const YandexMaps = () => {
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
                            right={'30%'}
                            className={classes.contacts}
                            style={{
                                zIndex: 100,
                                borderRadius: '20px',
                                backgroundImage: `linear-gradient(-60deg,var(--mantine-color-blue-4) 0,var(--mantine-color-blue-7) 100%)`,
                            }}
                        >
                            <Text
                                fz="lg"
                                fw={700}
                                className={classes.title}
                                c="#fff"
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
