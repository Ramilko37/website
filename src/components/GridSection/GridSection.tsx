import { Box, Container, Flex, Grid, Image, Text, rem } from '@mantine/core'
import campusImage from '../../../public/images/campus.png'
import buildingsImage from '../../../public/images/buildings.jpg'
import buildingsImage2 from '../../../public/images/construct2.jpeg'

export const GridSection = () => {
    return (
        <Container
            w={'100%'}
            style={{ justifyContent: 'center' }}
            m={0}
            my="xl"
            h={'fit-content'}
        >
            <Grid w={'97vw'} gutter="md" bg={'grainsboro'}>
                {/* First column with 1 row */}
                <Grid.Col span={6}>
                    <Flex direction={'column'} gap={'20px'}
                        style={{
                            height: 'fit-content',
                            background: 'gainsboro',
                            // border: '3px solid #33bbff',
                           
                            padding: '24px',
                        }}
                    >
                        <Image w={'100%'} h={'200px'} src={buildingsImage} />
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien mi. Aliquam erat volutpat. Maecenas efficitur imperdiet auctor. Sed efficitur dignissim urna, quis vehicula risus porttitor sit amet. Aenean sed lacinia felis. Donec sed ipsum purus. Donec et tortor sed est gravida scelerisque id sit amet felis. Proin ultrices ex eget velit vulputate, sit amet dapibus nisi pretium. Aenean egestas metus sit amet dignissim accumsan. </Text>

                        <Text>При этом подобные элементы «самобытности» края встроены в общую архитектурную концепцию кампуса максимально гармонично, не в ущерб современных зданий и уютными пространственными решениями.
                        </Text>
                        </Flex>
                </Grid.Col>

                {/* Second column with two rows */}
                <Grid.Col style={{ gap: '16px' }} span={6}>
                    <Box
                        style={{
                            display: 'block',
                            height: 'fit-content',
                            background: 'gainsboro',
                            // border: '3px solid #33bbff',
                            marginBottom: '24px',
                            // borderRadius: '18px',
                            padding: '24px',
                        }}
                    >
                        <Image w={'200px'}  h={'200px'} mr={'20px'} style={{ float: 'right' }} src={campusImage}/>
                        <Text w={'100%'}>

                        После определения состава объекта пришло время выбора подходящего земельного участка, что является не простой задачей, учитывая, что территория застройки должна составлять не менее 131 тыс. м2 и находиться, при этом, в черте города, чтобы студенты и граждане спокойно добирались до кампуса. 
Решение властей по земельному вопросу оказалось крайне удачным: подходящий земельный участок нашли в Камской долине – почти неосвоенного микрорайона, расположенного в правобережной части города. Выбор именно этого участка решит для властей сразу 2 задачи: (1) минимизирует время в пути до кампуса студентов и горожан, (2) начать освоение всего микрорайона вокруг такого якорного проекта (включая строительство новых жилых кварталов, благоустройство района, создание новых предприятий).

Рис. 2: схема расположения Пермского кампуса

                        </Text>
                    </Box>
                    <Box
                        style={{
                            height: 'fit-content',
                            background: 'gainsboro',
                            // border: '3px solid #33bbff',
                            // borderRadius: '18px',
                            padding: '24px',
                            gap: '16px'
                        }}
                    >
                      <Text> После определения состава объекта пришло время выбора подходящего земельного участка, что является не простой задачей, учитывая, что территория застройки должна составлять не менее 131 тыс. м2 и находиться, при этом, в черте города, чтобы студенты и граждане спокойно добирались до кампуса. Решение властей по земельному вопросу оказалось крайне удачным: подходящий земельный участок нашли в Камской долине – почти неосвоенного микрорайона, расположенного в правобережной части города. Выбор именно этого участка решит для властей сразу 2 задачи: (1) минимизирует время в пути до кампуса студентов и горожан, (2) начать освоение всего микрорайона вокруг такого якорного проекта (включая строительство новых жилых кварталов,</Text>
                        <Image w={'100%'} h={'200px'} fit={'cover'} src={buildingsImage2} />
                    </Box>
                  
                </Grid.Col>
            </Grid>
        </Container>
    )
}
