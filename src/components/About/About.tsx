import { Flex, Title, Text } from '@mantine/core'
import styles from './About.module.css'

export const About = () => {
    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={{ base: '16px', lg: '24px' }}
            p={{ base: '24px 24px 0', lg: '120px 0 190px' }}
           bg={'linear-gradient(90deg, #DAE1ED 0%, #BCD2EB 100%)'}

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
                    background: 'transparent',
                }}
            >
                <Title className={styles.title}>О нас</Title>
                 <Text className={styles.description}>
                    Частная инвестиционная компания, специализирующаяся на
                    реализации крупных инфраструктурных проектов на принципах
                    государственно-частного партнёрства и проектного
                    финансирования. 
                </Text>
                 <Text className={styles.description}>
                     Мы реализуем проекты полного жизненного
                    цикла по модели BOT/BOOT (Build-Own-Operate-Transfer),
                    включая структурирование, строительство, платную
                    эксплуатацию и передачу публичной стороне по истечении
                    сроков реализации проекта.
                </Text>

                <Text className={styles.description}>
                    Являясь частью команды АФК
                    «Система», мы обладаем уникальной возможностью по
                    привлечению групповых компаний при реализации проектов
                    (Группа «Эталон», Sitronics Group, ПАО «МТС», Cosmos Hotel
                    Group, Группа компаний «Медси» и др.), что позволяет
                    эффективно управлять рисками на всех стадиях проектах.
                </Text>
            </Flex>
        </Flex>
    )
}
