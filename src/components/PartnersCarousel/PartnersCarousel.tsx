import Marquee from 'react-fast-marquee'
import { Box, Image } from '@mantine/core'

export const PartnersCarousel = () => {
    const handleClick = (url: string) => {
        window.location.href = url
    }

    return (
        <div
            id="marquee"
            style={{
                height: 'fit-content',
                backgroundColor: '#f9fafc',
                padding: '100px 0 100px',
            }}
        >
            {/* <Title
                style={{ textAlign: 'center' }}
                w={'100%'}
                m={'0 auto 50px'}
                c={'#002F6D'}
            >
                Наши Партнеры
            </Title> */}
            <Marquee
                style={{ width: '100%' }}
                pauseOnHover={true}
                direction={'left'}
                speed={80}
            >
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                    onClick={() => handleClick('https://mts.ru')}
                >
                    <a href="https://mts.ru">
                        <Image
                            w={'100%'}
                            h={'100%'}
                            src={
                                'https://thumb.tildacdn.com/tild3231-3932-4665-b338-666435666631/-/resize/320x/-/format/webp/Logo__2023svg.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://sber.ru" target="blank">
                        <Image
                            mt={'60px'}
                            src={
                                'https://thumb.tildacdn.com/tild6334-3733-4234-b962-316366306634/-/resize/320x/-/format/webp/sber_logo_main_7d73a.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://etalongroup.ru/" target="blank">
                        <Image
                            mt={'60px'}
                            src={
                                'https://thumb.tildacdn.com/tild6364-3838-4531-a438-613631633131/-/resize/320x/-/format/webp/Etalon_Logo-_svg.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'180px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://www.sistema.ru/" target="blank">
                        <Image
                            w={'180px'}
                            h={'150px'}
                            src={
                                'https://thumb.tildacdn.com/tild6235-3237-4534-a235-663363373937/-/resize/320x/-/format/webp/logo-sistema.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://mts.ru" target="blank">
                        <Image
                            w={'100%'}
                            h={'100%'}
                            src={
                                'https://thumb.tildacdn.com/tild3231-3932-4665-b338-666435666631/-/resize/320x/-/format/webp/Logo__2023svg.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://sber.ru" target="blank">
                        <Image
                            mt={'60px'}
                            src={
                                'https://thumb.tildacdn.com/tild6334-3733-4234-b962-316366306634/-/resize/320x/-/format/webp/sber_logo_main_7d73a.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'170px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://etalongroup.ru/" target="blank">
                        <Image
                            mt={'60px'}
                            src={
                                'https://thumb.tildacdn.com/tild6364-3838-4531-a438-613631633131/-/resize/320x/-/format/webp/Etalon_Logo-_svg.png'
                            }
                        />
                    </a>
                </Box>
                <Box
                    style={{ cursos: 'pointer', zIndex: 200 }}
                    w={'180px'}
                    h={'170px'}
                    mr={'100px'}
                >
                    <a href="https://www.sistema.ru/" target="blank">
                        <Image
                            w={'180px'}
                            h={'150px'}
                            src={
                                'https://thumb.tildacdn.com/tild6235-3237-4534-a235-663363373937/-/resize/320x/-/format/webp/logo-sistema.png'
                            }
                        />
                    </a>
                </Box>
            </Marquee>
        </div>
    )
}
