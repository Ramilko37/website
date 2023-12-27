import { FC, useEffect, useRef, useState } from "react";
import { Flex, Image, Title } from '@mantine/core'

import classes from "./HowItWorks.module.css";


const imagesPerm = [
  {
    image: '../../../public/images/perm_1.jpg',
    title: 'title'
  },
  {
    image: '../../../public/images/perm_2.jpg',
    title: 'title'
  },
  {
    image: '../../../public/images/perm_3.jpg',
    title: 'title'
  },
  {
    image: '../../../public/images/perm_4.jpg',
    title: 'title'
  },
  {
    image: '../../../public/images/perm_5.jpg',
    title: 'title'
  },
  {
    image: '../../../public/images/perm_6.jpg',
    title: 'title'
  },
]



const textContent = [
  {
    text: 'Пермский кампус - социально-ориентированный проект инфраструктуры международного уровня.',
  },
  {
    text: 'Разработан в рамках федеральной программы "Наука и университеты". Вместимость кампуса более 5 тысяч человек.',
  },
  {
    text: 'Инфраструктура кампуса включает в себя учебную лабораторию, спортивный комплекс, бассейн, конгресс-холл и гостиницу.',
  },
  {
    text: 'Проект реализует компания ООО "Эталон Кампус" входящая в Группу "Эталон".',
  },
  {
    text: 'Пермский кампус - социально-ориентированный проект инфраструктуры международного уровня.',
  }
]

const HowItWorks: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

 const handleNavClick = (index: number) => {
  const targetElement = document.getElementById(`how-image-${index}`);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (
        window.innerWidth > 1024 &&
        sectionRef &&
        sectionRef.current &&
        stickyRef &&
        stickyRef.current
      ) {
        if (
          scrollTop <
          sectionRef.current.offsetTop + stickyRef.current.offsetTop
        ) {
          setActiveIndex(0);
          return;
        }
        if (
          scrollTop >
          sectionRef.current.offsetTop +
          stickyRef.current.offsetTop +
          stickyRef.current.offsetHeight -
          window.innerHeight
        ) {
          setActiveIndex(4);
          return;
        }
        if (
          scrollTop >=
          sectionRef.current.offsetTop + stickyRef.current.offsetTop &&
          scrollTop <=
          sectionRef.current.offsetTop +
          stickyRef.current.offsetTop +
          stickyRef.current.offsetHeight -
          window.innerHeight
        ) {
          const relativeScrollTop =
            scrollTop -
            (sectionRef.current.offsetTop + stickyRef.current.offsetTop);
          const scrollPercent = relativeScrollTop / (window.innerHeight * 3);
          // 0 - 20 - setActiveIndex(0)
          // 20 - 40 - setActiveIndex(1)
          // 40 - 60 - setActiveIndex(2)
          // 60 - 80 - setActiveIndex(3)
          // 80 - 100 - setActiveIndex(4)
          if (scrollPercent < 0.2) {
            setActiveIndex(0);
            return;
          }
          if (scrollPercent < 0.4) {
            setActiveIndex(1);
            return;
          }
          if (scrollPercent < 0.6) {
            setActiveIndex(2);
            return;
          }
          if (scrollPercent < 0.8) {
            setActiveIndex(3);
            return;
          }
          setActiveIndex(4);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <section className={classes.howitworks} ref={sectionRef} id="howitworks">
        <Title style={{ textAlign: 'center' }} m={'0 auto'} variant="h2">Кампус НИУ ВШЭ в Перми</Title>

      <div className="container">
        <div className={classes.content} ref={stickyRef}>

          <nav style={{ display: 'flex', paddingLeft: '100px', justifyItems: 'center', height: '300px', width: '80vw', justifyContent: 'center', zIndex: 1000 }} >
           
            <Flex w={'100%'} gap={'20px'}>
              {imagesPerm.map(
                (item, index) => (

                  <a
                    style={{ width: '300px', height: '200px' }}
                    key={`how-nav-${index}`}
                    className={activeIndex === index ? classes.selected : ""}
                    onClick={() => {
                      handleNavClick(index);
                    }}
                  >

                    <Image
                      style={{ opacity: activeIndex === index ? 0.7 : ''}}
                      src={item.image}
                      width={'100%'}
                      height={'100%'}
                      title={item.title}
                      fit={'contain'}
                    />

                    {/* <span className={`fw500 ${classes.label}`}>
                    {item.title}
                  </span> */}
                  </a>
                )
              )}
            </Flex>
          </nav>
          <Flex px={'24px'} className={classes.sticky}>
            <div className={classes.texts}>
              {textContent.map(
                (item, index) => (
                  <p
                    key={`how-text-${index}`}
                    className={`fw450 ${activeIndex === index ? classes.selected : ""
                      }`}
                  >
                    {item.text}
                  </p>
                )
              )}
            </div>
            <div className={classes.tablet}>
              {imagesPerm.map(
                (item, index) => (
                  <div
                    key={`how-image-${index}`}
                    className={`${classes.image} ${activeIndex === index ? classes.selected : ""
                      }`}
                  >
                    <Image
                      src={item.image}
                      width={1302}
                      height={813}
                      alt={item.title}
                      title={item.title}
                    />
                  </div>
                )
              )}
            </div>
          </Flex>
        </div>
        <div className={classes.contentMobile}>
          {imagesPerm.map(
            (item, index) => (
              <div key={`how-${index}`} className={classes.item}>
                <div className={classes.title}>
                  <span className={classes.icon}>
                    <Image
                      src={item.image}
                      width={24}
                      height={24}
                      alt={item.title}
                      title={item.title}
                    />
                  </span>
                  <span className={`fw500 ${classes.label}`}>
                    {item.title}
                  </span>
                </div>
                <p className="fw450">{item.title}</p>
                <div className={classes.tblt}>
                  <Image
                    src={item.image}
                    width={1440}
                    height={900}
                    alt={item.title}
                    title={item.title}
                  />
                </div>
                <div className={classes.device}>
                  <Image
                    src={item.image}
                    width={410}
                    height={834}
                    alt={item.title}
                    title={item.title}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
