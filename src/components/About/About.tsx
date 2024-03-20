import { Flex, Title, Text } from '@mantine/core'
import styles from './About.module.css'
import bgSvg from '../../images/about_bg.svg'

export const About = () => {
    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={{ base: '16px', lg: '24px' }}
            p={{ base: '44px 20px 44px', lg: '20px 0 20px' }}
            style={{
                borderRadius: '12px',
                backgroundImage: `url(${bgSvg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* <AboutBanner /> */}
            <Flex
                w={{ base: '100%', lg: '61vw' }}
                m={'0 auto'}
                h={'fit-content'}
                direction={'column'}
                justify={'center'}
                align={'center'}
                gap={{ base: '16px', lg: '24px' }}
                style={{
                    borderRadius: '12px',
                }}
            >
                <Title className={styles.title}>О НАС</Title>
                <Text className={styles.description}>
                    Частная инвестиционная компания, специализирующаяся на
                    реализации крупных инфраструктурных проектов на принципах
                    государственно-частного партнёрства и проектного
                    финансирования.
                </Text>
                <Text className={styles.description}>
                    Мы реализуем проекты полного жизненного цикла по модели
                    BOT/BOOT (Build-Own-Operate-Transfer), включая
                    структурирование, строительство, платную эксплуатацию и
                    передачу публичной стороне по истечении сроков реализации
                    проекта.
                </Text>

                <Text className={styles.description}>
                    Являясь частью команды АФК «Система», мы обладаем уникальной
                    возможностью по привлечению групповых компаний при
                    реализации проектов (Группа «Эталон», Sitronics Group, ПАО
                    «МТС», Cosmos Hotel Group, Группа компаний «Медси» и др.),
                    что позволяет эффективно управлять рисками на всех стадиях
                    проектах.
                </Text>
            </Flex>
        </Flex>
    )
}
