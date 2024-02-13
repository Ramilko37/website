import { Menu, Group, Center, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { Link } from 'react-scroll'
import classes from './Header.module.css'

const links = [
    { id: 'numbers', link: '/numbers', label: 'О нас' },
    {
        id: 'projects',
        link: '#1',
        label: 'Проекты',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { id: 'news', link: '', label: 'Новости' },
    { id: 'contacts', link: '', label: 'Контакты' },
    { id: 'partners', link: '', label: 'Партнеры' },
    { id: '', link: '/team', label: 'Команда' },
]

export const Header = () => {
    const [opened, { toggle }] = useDisclosure(false)

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item c={'#fff'} className={classes.menuItem} key={item.link}>
                {item.label}
            </Menu.Item>
        ))

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown
                        styles={{
                            dropdown: {
                                background: 'transparent',
                                border: 'none',
                            },
                        }}
                    >
                        {menuItems}
                    </Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <Link to={link.id as string} smooth>
                <a
                    key={link.label}
                    href={link.link}
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    {link.label}
                </a>
            </Link>
        )
    })

    return (
        <header className={classes.header}>
            <Container size="lg" m={'0 10% 0'}>
                <div className={classes.inner}>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </div>
            </Container>
        </header>
    )
}
