import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: IconUser,
    title: 'Lorem ipsum',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscin  Lorem ipsum dolor sit amet, consecteg elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: IconCookie,
    title: 'Lorem ipsum',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscin  Lorem ipsum dolor sit amet, consecteg elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: IconLock,
    title: 'Lorem ipsum',
    description:
      ' consectetur adipiscin  Lorem ipsum dolor sit amet, consecteg elit.  Lo piscin  Lorem ipsum dolor sit amet, consecteg elit. rem ips',
  },
  {
    icon: IconMessage2,
    title: 'Lorem ipsum',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export const FeaturesGrid = () => {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Комплексный подход
к реализации крупных инфраструктурных проектов</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
        Существующие инфраструктурные активы, требующие значительных инвестиций с перспективой выхода на качественно новый уровень
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}