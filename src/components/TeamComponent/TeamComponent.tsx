import { Flex, SimpleGrid, Title } from '@mantine/core'
import { TeamCardComponent } from '../TeamCardComponent/TeamCardComponent'

import principal from '../../images/bugulov.jpg'
import financial from '../../images/sozaev.jpg'
import stolkov from '../../images/stolkov.png'
import { TeamMemberComponent } from '../TeamMemberComponent/TeamMemberComponent'
import { useState } from 'react'

const data = [
    {
        id: 1,
        name: 'Бугулов Алан Арсенович',
        position: 'Генеральный Директор',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: principal,
    },
    {
        id: 2,
        name: 'Созаев Сослан Тотразович',
        position: 'Директор финансово-юридического департамента',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: financial,
    },
    {
        id: 3,
        name: 'Столков Андрей Александрович',
        position: 'Директор департамента проектирования и строительства ',
        description:
            'Более 20 лет в управлении строительными проектами, включая опыт строительства в сфере энергетических ,дорожных объектов, гражданских и промышленных  объектов. Специализируется на сопровождении проектов в части градостроительного консалтинга, анализа и проработки градостроительного потенциала земельных участков, разработки архитектурных концепций и архитектурно-градостроительных решений , сбора исходно-разрешительной документации, инженерных изысканий, проектирования и строительства ,получения заключений органов государственного строительного надзора  о соответствии построенного ,реконструируемого объекта капитального строительства требованиям проектной документации, разрешений на ввод объектов в эксплуатацию. Более 2 млн кв.м построенных площадей.',
        image: stolkov,
    },
    {
        id: 4,
        name: 'Созаев Сослан Тотразович',
        position: 'Директор финансово-юридического департамента',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: financial,
    },
    {
        id: 5,
        name: 'Бугулов Алан Арсенович',
        position: 'Генеральный Директор',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: principal,
    },
    {
        id: 6,
        name: 'Столков Андрей Александрович',
        position: 'Директор департамента проектирования и строительства ',
        description:
            'Более 20 лет в управлении строительными проектами, включая опыт строительства в сфере энергетических ,дорожных объектов, гражданских и промышленных  объектов. Специализируется на сопровождении проектов в части градостроительного консалтинга, анализа и проработки градостроительного потенциала земельных участков, разработки архитектурных концепций и архитектурно-градостроительных решений , сбора исходно-разрешительной документации, инженерных изысканий, проектирования и строительства ,получения заключений органов государственного строительного надзора  о соответствии построенного ,реконструируемого объекта капитального строительства требованиям проектной документации, разрешений на ввод объектов в эксплуатацию. Более 2 млн кв.м построенных площадей.',
        image: stolkov,
    },
    {
        id: 7,
        name: 'Бугулов Алан Арсенович',
        position: 'Генеральный Директор',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: principal,
    },
    {
        id: 8,
        name: 'Созаев Сослан Тотразович',
        position: 'Директор финансово-юридического департамента',
        description:
            'С 2007 по 2017 годы работал в федеральных органах исполнительной власти, в том числе  последние 7 лет в Минфине России, где отвечал за управление портфелем инвестиционных проектов в сфере транспорта с персональным фокусом на замещение бюджетного финансирования внебюджетными источниками. Покинул госслужбу в должности заместителя директора департамента. С 2017 года трудился на руководящих позициях в крупных инфраструктурных холдингах и инвестиционных компаниях, в том числе международных (Ictas-Astaldi, Группа «ВИС», InfraOne). Специализируется на структурировании и сопровождении проектов в области инфраструктуры на принципах проектного финансирования и ГЧП. Участвовал в разработке и написании действующих государственных мер поддержки рынка ГЧП, таких как: -межбюджетные трансферты на поддержку региональных проектов ГЧП в дорожной отрасли; -межбюджетные трансферты на реализацию проектов строительства кампусов; -«Дальневосточная концессия»; -участие ППК РЭО в уставочных (складочных) капиталах юридических лиц, реализующих ГЧП проекты; -имущественные взносы ГК «Автодор» на участие в капиталах хозяйственных обществ, реализующих инвестиционные проекты. Член экспертного совета по развитию ГЧП при Минэкономразвития России. Имеет благодарность Министра финансов РФ, различные ведомственные награды.',
        image: financial,
    },
]

export type TeamMember = {
    id: number
    name: string
    position?: string
    description?: string
    image: string
}

export interface ITeamMemberProps {
    teamMember: TeamMember
}

export const TeamComponent = () => {
    const [activeMember, setActiveMember] = useState<number | undefined>(
        undefined
    )

    const handleCardClick = (id: number) => () => {
        setActiveMember(id)
    }

    return (
        <Flex
            w={{ base: '100%', lg: '70vw' }}
            h={'100%'}
            direction={'column'}
            gap={'36px'}
        >
            <Title
                style={{ textAlign: 'left' }}
                c={'#002F6D'}
                fz={{ base: '30px', lg: '40px' }}
                fw={'100'}
                w={'100%'}
            >
                КОМАНДА
            </Title>
            {activeMember && (
                <TeamMemberComponent teamMember={data[activeMember - 1]} />
            )}
            <SimpleGrid
                spacing={{ base: '20px', lg: '30px' }}
                verticalSpacing={{ base: '24px', md: '36px' }}
                cols={{ base: 2, lg: 4 }}
            >
                {data.map((teamMember: TeamMember, key) => {
                    return (
                        <TeamCardComponent
                            key={key}
                            teamMember={teamMember}
                            handleCardClick={handleCardClick}
                        />
                    )
                })}
            </SimpleGrid>
        </Flex>
    )
}
