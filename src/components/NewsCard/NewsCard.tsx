import {
  Card,
  Image,
  Text,
  Group,
  Button,
  Flex,
} from '@mantine/core';
import classes from './styles.module.css';

interface INewsCardProps {
  linkProps: { href: string, target: string, rel: string}
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}


export function NewsCard({ linkProps, image, title, description }: INewsCardProps) {

  const buttonClickHandler = () => {
    window.open(linkProps.href, "_blank")
  }

  return (
    <Card h={'fit-content'} withBorder radius="md" className={classes.card} pos={'relative'}>
      <Card.Section withBorder >
        <a {...linkProps}>
          <Image fit={'contain'} src={image} height={180} />
        </a>
      </Card.Section>

      <Flex direction={'column'} style={{ flex: 1 }}>

        <Text c={'#002F6D'} className={classes.title} fw={500} component="a" {...linkProps}>
          {title}
        </Text>

        <Text fz="md" c="dimmed" lineClamp={4}>
          {description}
        </Text>
      </Flex>

      <Group mt="xs" bottom={0}>
        <Button onClick={buttonClickHandler} bg={'#002F6D'} radius="md" style={{ flex: 1 }}>
          К новости
        </Button>

      </Group>
    </Card>
  );
}