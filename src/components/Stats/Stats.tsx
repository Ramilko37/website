import { Text } from '@mantine/core';
import classes from './Stats.module.css';

const data = [
  {
    title: 'LOREM IPSUM',
    stats: '456,133',
    description: '24% Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    title: 'LOREM IPSUM',
    stats: '2,175',
    description: '13% Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    title: 'LOREM IPSUM',
    stats: '1,994',
    description: '1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
];

const Stats = () => {

  
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export default Stats