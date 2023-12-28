import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
  Button,
  Flex,
} from '@mantine/core';
import classes from './styles.module.css';

interface INewsCardProps {
  linkProps: { href: string, target: '_blank', rel: 'noopener noreferrer' }
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}


export function NewsCard({ linkProps, image, title, description}: INewsCardProps) {

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


      {/* <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            Bill Wormeater
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group> */}
        <Group mt="xs" bottom={0}>
        <Button onClick={buttonClickHandler} bg={'#002F6D'} radius="md" style={{ flex: 1 }}>
          К новости
        </Button>
       
      </Group>
    </Card>
  );
}