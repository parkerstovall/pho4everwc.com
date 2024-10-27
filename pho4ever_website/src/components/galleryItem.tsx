import * as React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { Gallery_Item } from "../constants/gallery_items";

export default function GalleryItem(item: Gallery_Item) {
  return (
    <Grid
      sx={{
        "&:hover": { transform: "scale(1.1)" },
        transition: ".3s ease all",
        position: "relative",
        padding: "0 15px",
      }}
      size={{ xs: 12, sm: item.width }}
    >
      <Box
        sx={{ width: "100%", height: "400px", objectFit: "cover" }}
        component="img"
        src={item.img}
      />

      <Box
        component={"div"}
        sx={{ transition: ".5s ease all" }}
        className="hover:opacity-100 opacity-0 absolute inset-0"
      >
        <Typography
          variant="h6"
          className="w-full text-center bottom-2 absolute text-white [text-shadow:_0_0_8px_black]"
        >
          {item.caption}
        </Typography>
      </Box>
    </Grid>
  );
}
