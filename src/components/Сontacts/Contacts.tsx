import { Box, Flex, Text, Title } from '@mantine/core'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { ContactIconsList } from '../ContactIconsList/ContactIconsList'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'

export const Contacts = () => {
    const isMobile = useMediaQuery(`(max-width: 640px)`)

    return (
        <Flex
            id={'contacts'}
            w={'61vw'}
            h={'900px'}
            m={'0 auto 132px'}
            style={{ borderRadius: '16px', overflow: 'hidden' }}
            direction={'column'}
            justify={'center'}
            align={'center'}
            gap={'36px'}
        >
            <Title c={'#012F6D'} fz={42} fw={700}>
                Контакты
            </Title>
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
                        <Placemark defaultGeometry={[55.768355, 37.670241]} />
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
        </Flex>
    )
}
