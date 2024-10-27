import { Paper, Stack, Typography } from "@mui/material";
import { carouselItem } from "../constants/carosel_items";
import * as React from "react";

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
        <Typography
          fontWeight={"500"}
          className="[text-shadow:_0_0_4px_black] text-white"
          variant="h1"
        >
          {props.header}
        </Typography>

        <Typography
          className="[text-shadow:_0_0_4px_black] text-white"
          variant="h3"
        >
          {props.subHeader}
        </Typography>

        <Typography
          className="[text-shadow:_0_0_4px_black] text-white italic"
          variant="h5"
        >
          {props.tag}
        </Typography>
      </Stack>
    </Paper>
  );
}
