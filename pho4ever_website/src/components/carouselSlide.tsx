import { Paper, Stack, Typography } from "@mui/material";
import { carouselItem } from "../constants/carosel_items";
import styles from "../styles/home.module.css";

export default function CarouselSlide(props: carouselItem) {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "500px",
        backgroundImage: `url("${props.image}");`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <Stack spacing={3} alignItems={"center"}>
        <Typography className={styles.carousel_caption} variant="h1">
          {props.header}
        </Typography>

        <Typography className={styles.carousel_caption} variant="h3">
          {props.subHeader}
        </Typography>

        <Typography className={styles.carousel_caption} variant="h5">
          {props.tag}
        </Typography>
      </Stack>
    </Paper>
  );
}
