import { Flex } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'

import { Carousel } from '@mantine/carousel';
import { NewsCard } from '../NewsCard/NewsCard';
import vettaNewsImg from '../../images/vetta.png'
import businessClassNews from '../../images/businessClassNews.png'
import kommersant from '../../images/kommersant.png'



export const MOCKDATA = [
  {
    linkProps: { href: 'https://vetta.tv/news/society/v-permi-moskovskaya-kompaniya-postroit-mezhvuzovskiy-kampus/', target: '_blank', rel: 'noopener noreferrer' },
    image: vettaNewsImg,
    title: 'В Перми московская компания построит межвузовский кампус',
    description:
      'Федеральный девелопер «Эталон Кампус», входящий в группу «Эталон», стал единственным учредителем ООО «Кампус «Парма» - концессионера строительства многофункционального студенческого кампуса в Перми, сообщает «Ъ-Прикамье». Ранее компания принадлежала АФК «Система». ',
  },
  {
    linkProps: { href: 'https://www.kommersant.ru/doc/6135368', target: '_blank', rel: 'noopener noreferrer' },

    image: kommersant,
    title: 'Для строительства межвузовского кампуса в Перми привлекли федерального девелопера «Эталон» ',
    description: 'ООО «Кампус “Парма”», концессионер строительства межвузовского студенческого кампуса в Перми, сменило собственника. По данным «СПАРК-Интерфакс», с 24 июля единственным учредителем компании является ООО «Эталон Кампус». Ранее 100% долей в уставном капитале общества принадлежало основателю инвесткомпании АФК «Система» Владимиру Евтушенко.'
  },
  {
    linkProps: { href: 'https://www.business-class.su/news/2023/07/30/koncessioner-mezhvuzovkogo-kampusa-v-permi-pereshel-v-strukturu-krupnogo-federalnogo-developera', target: '_blank', rel: 'noopener noreferrer' },
    image: businessClassNews,
    title: '​Концессионер межвузовcкого кампуса в Перми перешел в структуру федерального девелопера',
    description:
      'Учредителем ООО «Кампус «Парма», концессионера строительства межвузовского кампуса в Перми, стала компания ООО «Эталон Кампус» (входит в структуру группы «Эталон»). Факт зафиксирован в ЕГРЮЛ 24 июля.'
  },
];



export const NewsSlider = () => {                 
  const slides = MOCKDATA.map((feature, index) => {
    return (
        <Carousel.Slide key={index} style={{ height: '100%', padding: '24px' }}>
              <NewsCard linkProps={feature.linkProps} image={feature.image} title={feature.title}
                 description={feature.description} key={index} />
        </Carousel.Slide>
    )
  })

   
  return (
    <Flex h={'100%'} direction={'column'} w={'80vw'} m={'0 auto'} justify={'center'} style={{ border: '1px solid red' }}>
       <Carousel
        height="100%" 
        style={{ width: '70vw', padding: '40px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}
        slideSize={{ base: '40%'}}
        slideGap="xl"
        align="center"
        slidesToScroll={1}
        loop
      >
      {slides}
      </Carousel>
    </Flex>
  );
} 