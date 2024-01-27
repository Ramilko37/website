import { Flex, Title, Text, Timeline, Accordion, List } from '@mantine/core'
import { AboutBanner } from '../AboutBanner/AboutBanner'
import { useState } from 'react'
import styles from './About.module.css'
import {
    IconChevronDown,
    IconChevronRight,
    IconPlus,
} from '@tabler/icons-react'

const concessionProjectStages = [
    {
        id: 0,
        stage: 'Подготовительный этап',
        bullet1:
            'Определение потребности в проекте, его целей и ожидаемых результатов.',
        bullet2: 'Анализ рынка, экономическая оценка проекта, оценка рисков.',
        bullet3: '',
    },
    {
        id: 1,
        stage: 'Финансирование проекта',
        bullet1:
            'Разработка и утверждение документов, необходимых для проведения тендера.',
        bullet2:
            'Организация процесса подачи заявок, оценка предложений участников.',
        bullet3: '',
    },
    {
        id: 2,
        stage: 'Разработка и проектирование',
        bullet1: 'Обсуждение и согласование ключевых аспектов соглашения.',
        bullet2:
            'Заключение официального документа, определяющего права и обязанности сторон.',
        bullet3: '',
    },
    {
        id: 3,
        stage: 'Строительство и реализация',
        bullet1:
            'Выполнение необходимых работ по созданию или обновлению инфраструктуры.',
        bullet2:
            'Осуществление деятельности по управлению и обслуживанию объекта концессии.',
        bullet3: '',
    },
    {
        id: 4,
        stage: 'Эксплуатация объекта',
        bullet1: 'Отслеживание выполнения условий концессионного соглашения.',
        bullet2:
            'Принятие мер по управлению рисками и внесение изменений в проект при необходимости.',
        bullet3: '',
    },
    {
        id: 5,
        stage: 'Мониторинг и отчетность',
        bullet1:
            'Возврат объекта государству или другому органу в соответствии с условиями соглашения.',
        bullet2:
            'Анализ достигнутых результатов и оценка эффективности проекта.',
        bullet3: '',
    },
]

export const About = () => {
    const [active, setActive] = useState<number>(1)

    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={{ base: '16px', lg: '24px' }}
            p={{ base: '0 24px 0', lg: '48px' }}
            bg={'rgba(0, 0, 0, 0.03)'}
        >
            <AboutBanner />
            <Flex
                w={{ base: '100%', lg: '68vw' }}
                m={'0 auto'}
                h={'fit-content'}
                p={{ base: '24px', lg: '48px' }}
                direction={'column'}
                justify={'center'}
                align={'center'}
                gap={{ base: '16px', lg: '24px' }}
                style={{
                    borderRadius: '12px',
                    background:
                        'linear-gradient(-60deg, var(--mantine-color-blue-4) 0%, #002F6D 100%)',
                }}
            >
                <Title c={'#fff'} fz={'38px'}>
                    ЦЕНТР ГЧП-КОМПЕТЕНЦИЙ
                    <br /> ГРУППЫ АФК «СИСТЕМА»
                </Title>
                <Text c={'#fff'} size="xl">
                    За два года деятельности Компании, было заключено 6
                    концессионных соглашений. Общая стоимость строительных
                    контрактов, полученных ООО «Эталон Кампус» превышает 122
                    млрд руб.
                </Text>
                <Text c={'#fff'} size="xl">
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
            <Flex
                w={'100%'}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: '16px', lg: '24px' }}
                p={{ base: '40px 13% 0', md: '90px 13% 0' }}
                bg={'transparent'}
                m={'auto'}
                justify={'space-between'}
            >
                <Flex m={'auto'}>
                    <Title c={'#002F6D'} fz={'48px'}>
                        Этапы реализации проектов
                    </Title>
                </Flex>
                <Timeline
                    mt={{ base: '24px', lg: '48px' }}
                    pt={'10px'}
                    w={'50%'}
                    active={active}
                    bulletSize={24}
                    lineWidth={2}
                    styles={{
                        root: {
                            padding: '10px',
                        },
                    }}
                >
                    {concessionProjectStages.map((stage, key) => {
                        return (
                            <Timeline.Item
                                key={stage.id}
                                h={'auto'}
                                c={'#002F6D'}
                                mb={'20px'}
                                style={{
                                    position: 'relative',
                                }}
                                title={stage.stage}
                                fz={'28px'}
                            >
                                <Accordion
                                    style={{
                                        padding: 0,
                                    }}
                                    chevron={null}
                                >
                                    <Accordion.Item
                                        key={stage.stage}
                                        value={stage.stage}
                                        className={styles.accordionItem}
                                        onClick={() => setActive(stage.id)}
                                    >
                                        <Accordion.Control
                                            w={'fit-content'}
                                            className={styles.accordionControl}
                                            fz={'12px'}
                                            style={{
                                                display: 'flex',
                                                textAlign: 'start',
                                                marginBottom: '20px',
                                                color: '#002F6D',
                                                alignContent: 'flex-start',
                                                padding: 0,
                                                alignItems: 'flex-start',
                                            }}
                                            styles={{
                                                chevron: {},
                                            }}
                                            chevron={<IconChevronDown />}
                                        ></Accordion.Control>
                                        <Accordion.Panel fz={'24px'}>
                                            <List spacing="xs">
                                                <List.Item>
                                                    {stage.bullet1}
                                                </List.Item>
                                                <List.Item>
                                                    {stage.bullet2}
                                                </List.Item>
                                                <List.Item
                                                    style={{
                                                        display:
                                                            stage.bullet3
                                                                .length > 0
                                                                ? 'flex'
                                                                : 'none',
                                                    }}
                                                >
                                                    {stage.bullet3}
                                                </List.Item>
                                            </List>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
            </Flex>
        </Flex>
    )
}
