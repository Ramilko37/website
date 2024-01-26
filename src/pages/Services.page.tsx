import {
    Container,
    Grid,
    Text,
    Title,
    Divider,
    ScrollArea,
    Box,
} from '@mantine/core'

export const Services = () => {
    return (
        <Container>
            <Grid>
                <Grid.Col span={12}>
                    <Title order={1}>Общая информация</Title>
                    <Divider my="sm" />
                </Grid.Col>

                <Grid.Col span={12}>
                    <Text>
                        ВТБ Инфраструктурный Холдинг – лидер на российском рынке
                        инфраструктурных инвестиций
                    </Text>
                    <Text>{/* Other text content here */}</Text>
                </Grid.Col>

                <Grid.Col span={12} mt="xl">
                    <Grid>
                        <Grid.Col span={6}>
                            <Title order={2}>18</Title>
                            <Text>
                                млрд USD российских и иностранных инвестиций
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Title order={2}>6,5</Title>
                            <Text>
                                млрд USD — кредиты и средства группы ВТБ
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Text>{/* Further description */}</Text>
                </Grid.Col>
            </Grid>

            <ScrollArea style={{ height: 300 }} mt="xl">
                <Box> {/* Your content for the scrollable area */} </Box>
            </ScrollArea>
        </Container>
    )
}
