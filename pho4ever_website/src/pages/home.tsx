import Carousel from "react-material-ui-carousel";
import { carouselItems } from "../constants/carosel_items";
import CarouselSlide from "../components/carouselSlide";

export default function Home() {
  return (
    <>
      <Carousel indicators={false}>
        {carouselItems.map((item, index) => {
          return <CarouselSlide key={index} {...item} />;
        })}
      </Carousel>

      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=701%20S%20madison%20st%20webb%20city&t=&z=15&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </>
  );
}
