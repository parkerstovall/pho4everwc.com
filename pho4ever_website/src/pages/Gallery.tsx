import { Container, Grid2 as Grid } from "@mui/material";
import GalleryItem from "../components/GalleryItem";
import { gallery_items } from "../constants/gallery_items";

export default function Gallery() {
  return (
    <Container className="my-6" maxWidth="lg">
      <Grid spacing={3} container>
        {gallery_items.map((item) => {
          return <GalleryItem key={item.img} {...item} />;
        })}
      </Grid>
    </Container>
  );
}
