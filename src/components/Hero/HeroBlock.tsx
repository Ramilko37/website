import { Container, Title, Text, Flex } from '@mantine/core'
import classes from './Hero.module.css'
import { Achievment } from '../Achievment/Achievment'
import video from '../../../public/images/bg_video.mp4'
import { animated, useSpring } from 'react-spring';

export default function HeroBlock() {


  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 1000 } ,
    delay: 1000
  })

  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: {  duration: 1000} ,
    delay: 2000
  })
  
    return (
        <div className={classes.hero}>
            {/* <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            /> */}
            <video
            src={video}
        autoPlay
        muted
        loop
        style={{
          width: '100%',
          height: '100dvh',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: 10,
        }}
      >
       
    
      </video>
            <Container style={{ zIndex: 20 }} className={classes.container} size="md">

              <animated.div style={titleAnimation}>
                <Title className={classes.title} >
                    Эталон Кампус - лидирующий игрок на рынке
                </Title>
                </animated.div>
                <animated.div style={textAnimation}>
                <Text className={classes.description} size="xl" mt="xl">
                    Лидер на российском рынке инфраструктурных инвестиций.
                    Команда профессионалов и профессионалы в команде. Инвесторы
                    в инвестициях.
                </Text>
                </animated.div>

                {/* <Flex gap={'24px'}>
                    <Achievment
                        title={'1'}
                        text={'млн рублей'}
                        description={'российских и иностранных инвестиций '}
                        classes={classes}
                    />
                    <Achievment
                        title={'500'}
                        text={'проектов'}
                        description={'во всех регионах России'}
                        classes={classes}
                    />
                    <Achievment
                        title={'100'}
                        text={'сотрудников'}
                        description={'по всему миру'}
                        classes={classes}
                    />
                </Flex> */}

            </Container>
        </div>
    )
}
