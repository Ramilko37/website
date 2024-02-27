import { Group, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-scroll'
import classes from './Header.module.css'
import { LogoIcon } from '../../images/icons/logo-icon'
import { Route, Link as RouterLink } from 'react-router-dom'

const links = [
    {
        id: 'projects',
        link: '#1',
        label: 'Проекты',
    },
    { id: 'news', link: '', label: 'Новости' },
    { id: 'team', link: '/team', label: 'Команда' },
    { id: 'contacts', link: '', label: 'Контакты' },
]

export const Header = () => {
    const [opened, { toggle }] = useDisclosure(false)

    const items = links.map((link) => {
        // const menuItems = link.links?.map((item) => (
        //     <Menu.Item c={'#fff'} className={classes.menuItem} key={item.link}>
        //         {item.label}
        //     </Menu.Item>
        // ))

        // if (menuItems) {
        //     return (
        //         <Menu
        //             key={link.label}
        //             trigger="hover"
        //             transitionProps={{ exitDuration: 0 }}
        //             withinPortal
        //         >
        //             <Menu.Target>
        //                 <a
        //                     href={link.link}
        //                     className={classes.link}
        //                     onClick={(event) => event.preventDefault()}
        //                 >
        //                     <Center>
        //                         <span className={classes.linkLabel}>
        //                             {link.label}
        //                         </span>
        //                     </Center>
        //                 </a>
        //             </Menu.Target>
        //             <Menu.Dropdown
        //                 styles={{
        //                     dropdown: {
        //                         background: 'transparent',
        //                         border: 'none',
        //                     },
        //                 }}
        //             >
        //                 {menuItems}
        //             </Menu.Dropdown>
        //         </Menu>
        //     )
        // }

        if (link.link === '/team') {
            return (
                <RouterLink className={classes.link} to={link.link}>
                    Команда
                </RouterLink>
            )
        } else {
            return (
                <Link style={{ height: '100%' }} to={link.id as string} smooth>
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
        }
    })

    return (
        <header className={classes.header}>
            <LogoIcon />
            <Container size="lg" m={0} h={'100%'}>
                <div className={classes.inner}>
                    <Group h={'100%'} gap={20} visibleFrom="sm">
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
