import * as React from "react";
import { Grid2, Typography } from "@mui/material";
import { Menu_Item } from "../constants/menu_items";

export default function MenuItem(props: Menu_Item) {
  return (
    <Grid2 sx={{ margin: "20px 0" }} container>
      <Grid2 size={10}>
        <Typography fontWeight={"bold"} textAlign={"left"} variant="body2">
          {props.name}
        </Typography>
      </Grid2>

      {props.price && (
        <Grid2 size={2}>
          <Typography fontWeight={"bold"} textAlign={"right"} variant="body2">
            {props.price}
          </Typography>
        </Grid2>
      )}

      <Grid2 size={10}>
        <Typography variant="body2" fontStyle={"italic"}>
          {props.desc}
        </Typography>
      </Grid2>

      {props.priceTwo && (
        <Grid2 size={2}>
          <Typography fontWeight={"bold"} textAlign={"right"} variant="body2">
            {props.priceTwo}
          </Typography>
        </Grid2>
      )}
    </Grid2>
  );
}
