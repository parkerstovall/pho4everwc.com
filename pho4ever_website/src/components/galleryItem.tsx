import { Box, Grid2 as Grid } from "@mui/material";
import { Gallery_Item } from "../constants/gallery_items";

export default function GalleryItem(item: Gallery_Item) {
  return (
    <Grid size={{ sm: 12, md: item.width }}>
      <Box
        sx={{ width: "100%", height: "400px", objectFit: "cover" }}
        component="img"
        src={item.img}
      />
    </Grid>
  );
}
