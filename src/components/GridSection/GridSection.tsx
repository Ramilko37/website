import { Container, Grid, rem } from '@mantine/core'

export const GridSection = () => {
    return (
        <Container
            w={'100vw'}
            style={{ justifyContent: 'center' }}
            m={0}
            my="xl"
        >
            <Grid w={'98vw'} gutter="md">
                {/* First column with 1 row */}
                <Grid.Col span={6}>
                    <div
                        style={{
                            height: '100%',
                            background: 'transparent',
                            border: '3px solid #33bbff',
                            borderRadius: '18px',
                            padding: '24px',
                        }}
                    >
                        First Column - 1 Row
                    </div>
                </Grid.Col>

                {/* Second column with two rows */}
                <Grid.Col style={{ gap: '16px' }} span={6}>
                    <div
                        style={{
                            height: '50px',
                            background: 'transparent',
                            border: '3px solid #33bbff',
                            marginBottom: '24px',
                            borderRadius: '18px',
                            padding: '24px',
                        }}
                    >
                        Second Column - Row 1
                    </div>
                    <div
                        style={{
                            height: '50px',
                            background: 'transparent',
                            border: '3px solid #33bbff',
                            borderRadius: '18px',
                            padding: '24px',
                        }}
                    >
                        Second Column - Row 2
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
