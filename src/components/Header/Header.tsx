import { Box, rem, Portal, Burger, Menu, Drawer } from '@mantine/core'
import classes from './Header.module.css'
import { useHeadroom, useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { Route, Link as RouterLink } from 'react-router-dom'

const linksData = [
    { id: 'numbers', title: 'О нас' },
    { id: 'projects', title: 'Проекты' },
    { id: 'news', title: 'Новости' },
    { id: 'contacts', title: 'Контакты' },
    { id: 'marquee', title: 'Партнеры' },
    { id: 'team', title: 'Команда' },
]

export const Header = () => {
    const pinned = useHeadroom({ fixedAt: 600 })
    const [opened, setOpened] = useState<boolean>(false)
    const isMobile = useMediaQuery('(max-width: 580px)')

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

                        {isMobile ? (
                            <Drawer
                                opened={opened}
                                onClose={() => setOpened(!opened)}
                                closeButtonProps={{
                                    size: 'xl',
                                    w: '90px',
                                    h: '110px',
                                }}
                            >
                                <Drawer.Body>
                                    {linksData.map((link) =>
                                        link.id === 'team' ? (
                                            <Menu.Item
                                                key={link.id}
                                                className={classes.link}
                                                closeMenuOnClick={true}
                                            >
                                                <RouterLink
                                                    className={
                                                        classes.linkMobile
                                                    }
                                                    to={link.id}
                                                >
                                                    {link.title}
                                                </RouterLink>
                                            </Menu.Item>
                                        ) : (
                                            <Menu.Item
                                                key={link.id}
                                                className={classes.link}
                                                closeMenuOnClick={true}
                                            >
                                                <Link
                                                    onClick={() => {
                                                        setOpened(!opened)
                                                    }}
                                                    className={
                                                        classes.linkMobile
                                                    }
                                                    smooth
                                                    spy
                                                    to={link.id}
                                                >
                                                    {link.title}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    )}
                                </Drawer.Body>
                            </Drawer>
                        ) : (
                            <Menu.Dropdown
                                bg={'transparent'}
                                style={{ border: 'none' }}
                            >
                                {linksData.map((link) =>
                                    link.id === 'team' ? (
                                        <Menu.Item
                                            key={link.id}
                                            className={classes.link}
                                            closeMenuOnClick={true}
                                        >
                                            <RouterLink
                                                className={classes.linkMobile}
                                                to={link.id}
                                            >
                                                {link.title}
                                            </RouterLink>
                                        </Menu.Item>
                                    ) : (
                                        <Menu.Item
                                            key={link.id}
                                            className={classes.link}
                                            closeMenuOnClick={true}
                                        >
                                            <Link
                                                onClick={() => {
                                                    setOpened(!opened)
                                                    if (link.id === 'team') {
                                                    }
                                                }}
                                                className={classes.link}
                                                smooth
                                                spy
                                                to={link.id}
                                            >
                                                {link.title}
                                            </Link>
                                        </Menu.Item>
                                    )
                                )}
                            </Menu.Dropdown>
                        )}
                    </Menu>
                </header>
            </Box>
        </Portal>
    )
}
