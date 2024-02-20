import { Text, Flex } from '@mantine/core'
// import classes from './styles.module.css'
// import { useHover } from '@mantine/hooks'

interface INewsCardProps {
    linkProps: { href: string; target: string; rel: string }
    image: string
    title: React.ReactNode
    description: React.ReactNode
    nextTitle: string | undefined
    // nextDescription: any
}

export function NewsCard({ image, title, nextTitle }: INewsCardProps) {
    // const { hovered, ref } = useHover()

    // const buttonClickHandler = () => {
    //     window.open(linkProps.href, '_blank')
    // }

    console.log(nextTitle, 'next title')

    return (
        <Flex w={'1170px'} gap={'30px'}>
            <Flex
                pos={'relative'}
                style={{
                    borderRadius: '16px',
                    border: '1px solid rgb(188, 210, 235)',
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
                p={'50px 46px 50px'}
                w={'769px'}
            >
                <Flex
                    pos={'absolute'}
                    top={'0'}
                    left={'0'}
                    w={'769px'}
                    h={'436px'}
                    style={{
                        zIndex: 100,
                        backgroundColor: '#000',
                        borderRadius: '16px',
                    }}
                    opacity={0.6}
                />
                <Flex style={{ zIndex: 110 }} direction={'column'} gap={'50px'}>
                    <Text c={'#fff'} opacity={0.7}>
                        01.01.2023
                    </Text>
                    <Text c={'#fff'} fz={'32px'}>
                        {title}
                    </Text>
                </Flex>
            </Flex>

            <Flex
                style={{
                    visibility: nextTitle === undefined ? 'hidden' : 'visible',
                    borderRadius: '16px',
                    border: '1px solid rgb(188, 210, 235)',
                }}
                bg={'#fff'}
                w={'369px'}
                h={'436px'}
                p={'51px 27px 51px'}
            >
                <Flex direction={'column'} gap={'50px'}>
                    <Text c={'#012F6D'} opacity={0.5}>
                        01.01.2023
                    </Text>
                    <Text
                        style={{ textAlign: 'left' }}
                        c={'#012F6D'}
                        fz={'24px'}
                        fw={400}
                    >
                        {nextTitle}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
