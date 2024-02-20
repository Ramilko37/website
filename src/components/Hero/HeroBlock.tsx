import { Container, Title, Text, Flex } from '@mantine/core'
import classes from './Hero.module.css'
import video from '../../images/hero_block_video.mp4'
import videoMobile from '../../images/bg_video_mobile.mp4'
import { animated, useSpring } from 'react-spring'
import { useMediaQuery } from '@mantine/hooks'

export default function HeroBlock() {
    const isMobile = useMediaQuery(`(max-width: 640px)`)
    const titleAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        config: { duration: 1000 },
        // delay: 1000
    })

    const textAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        config: { duration: 1000 },
        delay: 2000,
    })

    const citateAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-50%)' },
        config: { duration: 1000 },
        delay: 3000,
        width: '100%',
        textAlign: 'start',
        margin: 0,
    })

    return (
        <Flex
            id={'hero'}
            bg={'#f9fafc'}
            direction={'column'}
            className={classes.hero}
            pos={'relative'}
        >
            {/* <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, .15) 90%)"
                opacity={1}
                zIndex={1000}
            /> */}
            <video
                src={isMobile ? videoMobile : video}
                autoPlay
                muted
                loop
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: 10,
                    filter: 'brightness(50%)',
                }}
            ></video>
            <Container
                mt={'66px'}
                style={{ zIndex: 20 }}
                className={classes.container}
                fluid
                h={'100%'}
            >
                <Flex
                    gap={'24px'}
                    direction={'column'}
                    w={'100%'}
                    align={'flex-end'}
                >
                    <animated.div style={titleAnimation}>
                        <Title className={classes.title}>
                            ЭТАЛОННЫЕ КОНЦЕССИИ - Центр
                            <br /> компетенций ГЧП в группе «Эталон»
                        </Title>
                    </animated.div>
                    <animated.div style={textAnimation}>
                        <Text className={classes.description}>
                            Комплексный подход к реализации крупных
                            инфраструктурных проектов
                        </Text>
                    </animated.div>
                </Flex>
            </Container>

            <Flex
                p={'0 10% 0'}
                gap={'24px'}
                direction={'column'}
                w={'100%'}
                align={'flex-end'}
                style={{ zIndex: 1000 }}
                pos={'absolute'}
                bottom={'0'}
            >
                <animated.div style={citateAnimation}>
                    <Text
                        w={'600px'}
                        mt={'40px'}
                        c={'#fff'}
                        style={{ zIndex: 1000 }}
                        fz={'23px'}
                        fw={400}
                        lh={'130%'}
                    >
                        “Цель создания современных кампусов как раз в этом и
                        заключается - создать эталонные пространства”
                    </Text>
                    <Text
                        c={'#fff'}
                        fz={'20px'}
                        fw={400}
                        lh={'130%'}
                        opacity={'0.5'}
                    >
                        Президент Российской Федерации В.В. Путин
                    </Text>
                </animated.div>
            </Flex>
        </Flex>
    )
}
