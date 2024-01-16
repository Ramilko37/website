import { Text, Box, Stack, rem, Flex } from '@mantine/core'
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react'
import classes from './styles.module.css'

interface ContactIconProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun
    title: React.ReactNode
    description: React.ReactNode
}

function ContactIcon({
    icon: Icon,
    title,
    description,
    ...others
}: ContactIconProps) {
    return (
        <Flex color={'#002F6D'} className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon
                    style={{
                        width: rem(24),
                        height: rem(24),
                        color: '#002F6D',
                    }}
                />
            </Box>

            <div>
                {/* <Text size="xs" className={classes.title} c={'#fff'}>
          {title}
        </Text> */}
                <Text className={classes.description} c={'#002F6D'}>
                    {description}
                </Text>
            </div>
        </Flex>
    )
}

const MOCKDATA = [
    { title: 'Email', description: 'info@etalon-campus.ru', icon: IconAt },
    { title: 'Телефон', description: '+495 335 35 35', icon: IconPhone },
    {
        title: 'Адрес',
        description: 'Москва, пер Токмаков, д. 5, стр. 1, помещ. 1/5',
        icon: IconMapPin,
    },
    { title: 'Working hours', description: '9 00 – 18 00', icon: IconSun },
]

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => (
        <ContactIcon key={index} {...item} />
    ))
    return <Stack>{items}</Stack>
}
