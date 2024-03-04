import { useEffect, useRef, useState } from 'react'
import classes from './Header.module.css'
import { Box, Burger, CloseIcon } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-scroll'
import { LogoIcon } from '../../images/icons/logo-icon'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

interface IHeaderProps {
    isTeam?: boolean
    isNews?: boolean
    handleNewsBtnClick: () => void
}

const links = [
    {
        id: 'projects',
        link: '#1',
        label: 'Проекты',
    },
    { id: '', link: '/news', label: 'Новости' },
    { id: 'team', link: '/team', label: 'Команда' },
    { id: 'contacts', link: '', label: 'Контакты' },
]

export const Header = ({
    isTeam,
    isNews,
    handleNewsBtnClick,
}: IHeaderProps) => {
    const headerRef = useRef<HTMLElement>(null)
    const [whiteHeader, setWhiteHeader] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 1100px)')
    const navigate = useNavigate()

    const handleLogoClick = () => {
        if (isNews) {
            handleNewsBtnClick()
        }
        if (window.location.href !== '/') {
            navigate('/')
        }
        setMenuOpen(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleHamburgerClick = () => {
        setMenuOpen((prevState) => !prevState)
    }

    const handleLinkClick = () => {
        setMenuOpen((prevState) => !prevState)
    }

    useEffect(() => {
        const scrollHandler = () => {
            setWhiteHeader(document.documentElement.scrollTop > 0)
        }

        window.addEventListener('scroll', scrollHandler)

        scrollHandler()

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const items = links.map((link) => {
        if (link.link === '/team') {
            return (
                <RouterLink className={classes.link} to={link.link}>
                    Команда
                </RouterLink>
            )
        } else if (link.link === '/news' && !isNews) {
            return (
                <a className={classes.link} onClick={handleNewsBtnClick}>
                    Новости
                </a>
            )
        }
        {
            return (
                <Link
                    style={{ height: isMobile ? 'fit-content' : '100%' }}
                    to={link.id as string}
                    onClick={handleLinkClick}
                    smooth
                >
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
        <header
            className={`${classes.header} ${whiteHeader ? classes.white : ''} ${
                menuOpen ? classes.open : ''
            }`}
            ref={headerRef}
        >
            <div style={{ width: '100%' }}>
                <div className={classes.content}>
                    {menuOpen && isMobile ? (
                        <Box
                            w={'40px'}
                            h={'40px'}
                            style={{ zIndex: 1000 }}
                            onClick={handleLogoClick}
                        >
                            <CloseIcon />
                        </Box>
                    ) : (
                        <a
                            className={classes.logo}
                            onClick={handleLogoClick}
                            style={{ zIndex: 10000 }}
                        >
                            <LogoIcon onClick={handleLogoClick} />
                        </a>
                    )}
                    {!isTeam && (
                        <nav
                            style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                gap: '24px',
                                alignItems: 'center',
                            }}
                        >
                            {items}
                        </nav>
                    )}

                    {isMobile &&
                        (menuOpen ? (
                            <Box style={{ zIndex: 1000 }}>
                                <LogoIcon />
                            </Box>
                        ) : (
                            <div className={classes.right}>
                                <Burger
                                    color={'#233C91'}
                                    onClick={handleHamburgerClick}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </header>
    )
}
