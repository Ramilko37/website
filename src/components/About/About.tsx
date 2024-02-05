import { Flex, Title, Text } from '@mantine/core'
import styles from './About.module.css'


export const About = () => {
  

    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={{ base: '16px', lg: '24px' }}
            p={{ base: '24px 24px 0', lg: '90px 48px' }}
            bg={'rgba(0, 0, 0, 0.03)'}
        >
            {/* <AboutBanner /> */}
            <Flex
                w={{ base: '100%', lg: '66vw' }}
                m={'0 auto'}
                h={'fit-content'}
                direction={'column'}
                justify={'center'}
                align={'center'}
                gap={{ base: '16px', lg: '24px' }}
                style={{
                    borderRadius: '12px',
                    background:
                        'transparent',
                }}
            >
                <Title className={styles.title}>
                    О нас
                </Title>
                <Text c={'#002F6D'} size="xl" style={{ textAlign: 'justify' }}>
                    За два года деятельности Компании, было заключено 6
                    концессионных соглашений. Общая стоимость строительных
                    контрактов, полученных ООО «Эталон Кампус» превышает 122
                    млрд руб.
                </Text>
                <Text c={'#002F6D'} size="xl" style={{ textAlign: 'justify' }}> 
                    Расширение компетенций, полученное в ходе работы над
                    текущими проектами (структурирование, управление и GR) и
                    приобретенная репутация на рынке ГЧП позволяет Компании
                    увеличивать маржинальность зключаемых контрактов и расширять
                    зону присутствия Группы. Таким образом на текущий момент
                    прорабатываются еще 4 проекта, которые с высокой долей
                    вероятности начнут свою реализацию в следующем году и
                    увеличат портфель строительных контрактов Компании на 63
                    млрд руб.
                </Text>
            </Flex>
        </Flex>
    )
}
