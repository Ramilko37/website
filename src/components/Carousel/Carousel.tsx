// import { Carousel } from "@mantine/carousel";
// import { createStyles } from '@mantine/core';
// import Card from "./Card";

// const data = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature"
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach"
//   }
// ];

// const useStyles = createStyles((_theme, _params, getRef) => ({
//   carousel: {
//     "&:hover": {
//       [`& .${getRef("controls")}`]: {
//         opacity: 1
//       }
//     }
//   },

//   carouselControls: {
//     ref: getRef("controls"),
//     transition: "opacity 150ms ease",
//     opacity: 0,
//     "&[data-inactive]": {
//       opacity: 0,
//       cursor: "default"
//     }
//   },

//   carouselIndicator: {
//     width: 4,
//     height: 4,
//     transition: "width 2500ms ease",

//     "&[data-active]": {
//       width: 16
//     }
//   }
// }));

// export default function CardsCarousel() {
//   // check number of cards in console
//   console.log(data.length);

//   const { classes } = useStyles();
//   const slides = data.map((item, idx) => (
//     <Carousel.Slide key={item.title + idx}>
//       <Card {...item} />
//     </Carousel.Slide>
//   ));

//   return (
//     <Carousel
//       slideSize="auto"
//       slideGap="xs"
//       align="start"
//       slidesToScroll="auto"
//       containScroll="trimSnaps"
//       dragFree
//       // withIndicators

//       classNames={{
//         root: classes.carousel,
//         controls: classes.carouselControls
//         // indicator: classes.carouselIndicator  //add "withIndicators" if error
//       }}
//       // hide inactive controls
//       styles={{
//         control: {
//           "&[data-inactive]": {
//             opacity: 0,
//             cursor: "default"
//           }
//         }
//       }}
//     >
//       {slides}
//     </Carousel>
//   );
// }
