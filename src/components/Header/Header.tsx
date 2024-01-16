import { Box, rem, Portal, Burger, Menu } from '@mantine/core'
import classes from './Header.module.css'
import { useHeadroom } from '@mantine/hooks'
import { Link } from 'react-scroll'
import { useState } from 'react'

const linksData = [
    { id: 'numbers', title: 'О нас' },
    { id: 'projects', title: 'Проекты' },
    { id: 'news', title: 'Новости' },
    { id: 'contacts', title: 'Контакты' },
    { id: 'marquee', title: 'Партнеры' },
]

export const Header = () => {
    const pinned = useHeadroom({ fixedAt: 600 })
    const [opened, setOpened] = useState<boolean>(false)

    return (
        <Portal>
            <Box
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: 'var(--mantine-spacing-xs)',
                    height: rem(60),
                    zIndex: 1000000,
                    transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                    transition: 'transform 400ms ease',
                    background: 'transparent',
                }}
            >
                <header
                    className={classes.header}
                    style={{
                        position: 'relative',
                        display: pinned ? 'flex' : 'none',
                        transition: 'display 1s ease-in-out',
                    }}
                >
                    <Menu
                        shadow="none"
                        width={200}
                        closeOnItemClick={true}
                        closeOnClickOutside
                        opened={opened}
                        onChange={() => setOpened(!opened)}
                    >
                        <Menu.Target>
                            <Burger
                                size="xl"
                                color="#fff"
                                opened={opened}
                                onClick={() => setOpened(!opened)}
                                aria-label="Toggle navigation"
                            />
                        </Menu.Target>

                        <Menu.Dropdown
                            bg={'transparent'}
                            style={{ border: 'none' }}
                        >
                            {linksData.map((link) => (
                                <Menu.Item
                                    key={link.id}
                                    className={classes.link}
                                    closeMenuOnClick={true}
                                >
                                    <Link
                                        onClick={() => {
                                            setOpened(!opened)
                                        }}
                                        className={classes.link}
                                        smooth
                                        spy
                                        to={link.id}
                                    >
                                        {link.title}
                                    </Link>
                                </Menu.Item>
                            ))}
                        </Menu.Dropdown>
                    </Menu>
                </header>
            </Box>
        </Portal>
    )
}
