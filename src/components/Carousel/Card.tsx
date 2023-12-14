// import { Paper, Title, createStyles } from "@mantine/core";

// interface CardProps {
//   image: string;
//   title: string;
//   category: string;
// }

// const useStyles = createStyles((theme) => ({
//   card: {
//     width: 160,
//     height: 250,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-end", //pass "flex-start" for text top on the card AND "better see the indicators"
//     alignItems: "flex-start",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     textAlign: "start"
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 700,
//     color: theme.white,
//     lineHeight: 1.2,
//     fontSize: 16,
//     marginTop: theme.spacing.xs
//   }
// }));

// export default function Card({ image, title, category }: CardProps) {
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow="md"
//       p="sm"
//       radius="md"
//       sx={{ backgroundImage: `url(${image})` }}
//       className={classes.card}
//     >
//       <div>
//         <Title order={3} className={classes.title}>
//           {title}
//         </Title>
//       </div>
//     </Paper>
//   );
// }
