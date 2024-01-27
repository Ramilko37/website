import { Text } from '@mantine/core'
import classes from './AboutBanner.module.css'

const data = [
    {
        title: 'Более',
        stats: '120 млрд',
        description: ' Инвестиции в проекты по всей России',
    },
    {
        title: 'Более',
        stats: '20 000',
        description: 'мест для проживания создадут инвестириумые проекты',
    },
    {
        title: 'Более',
        stats: '300 млрд',
        description: 'вклад в ВВП экономики России от проектов кампусов',
    },
]

export const AboutBanner = () => {
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            {/* <Text className={classes.count}>{stat.stats}</Text> */}
            <Text mb={{ base: '12px', md: '20px' }} className={classes.title}>
                {stat.title}
            </Text>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ))
    return <div className={classes.root}>{stats}</div>
}
