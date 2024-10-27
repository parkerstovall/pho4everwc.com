import * as React from "react";
import { Grid2, Typography } from "@mui/material";
import { Menu_Item } from "../constants/menu_items";

export default function MenuItem(props: Menu_Item) {
  return (
    <Grid2 sx={{ margin: "20px 0" }} container>
      <Grid2 size={10}>
        <Typography
          className="text-gray-800"
          fontWeight={"bold"}
          textAlign={"left"}
          variant="body1"
        >
          {props.name}
        </Typography>
      </Grid2>

      {props.price && (
        <Grid2 size={2}>
          <Typography
            className="text-gray-800"
            fontWeight={"bold"}
            textAlign={"right"}
            variant="body1"
          >
            {props.price}
          </Typography>
        </Grid2>
      )}

      {props.desc && (
        <Grid2 size={10}>
          <Typography
            className="text-gray-800"
            variant="body2"
            fontStyle={"italic"}
          >
            {props.desc}
          </Typography>
        </Grid2>
      )}

      {props.priceTwo && (
        <Grid2 size={2}>
          <Typography
            className="text-gray-800"
            fontWeight={"bold"}
            textAlign={"right"}
            variant="body1"
          >
            {props.priceTwo}
          </Typography>
        </Grid2>
      )}
    </Grid2>
  );
}
