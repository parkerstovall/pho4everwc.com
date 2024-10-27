import * as React from "react";
import { Container, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white mt-4 py-4 sticky top-full">
      <Container maxWidth="md">
        <Stack
          gap={2}
          alignItems="center"
          justifyContent={"space-between"}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <ContactUs />
          <BusinessHours />
          <SocialMedia />
        </Stack>
      </Container>
    </footer>
  );
}

function ContactUs() {
  return (
    <Stack sx={{ width: { md: "25%", xs: "100%" } }}>
      <Typography sx={{ textDecoration: "underline" }} variant="h6">
        Contact Us
      </Typography>
      <Typography variant="body2">
        <b>Address:</b> 701 S Madison Street, Webb City, MO 64870
      </Typography>

      <Typography variant="body2">
        <b>Phone:</b> <a href="tel:(417)-717-0165">(417)-717-0165</a>
      </Typography>
    </Stack>
  );
}

function BusinessHours() {
  return (
    <Stack sx={{ width: { md: "25%", xs: "100%" } }}>
      <Typography sx={{ textDecoration: "underline" }} variant="h6">
        Business Hours
      </Typography>
      <Typography variant="body2">
        <b>Monday-Saturday:</b> 11 a.m. - 8 p.m.
      </Typography>

      <Typography variant="body2">
        <b>Sunday:</b> 11 a.m. - 5 p.m.
      </Typography>
    </Stack>
  );
}

function SocialMedia() {
  const linkStyle = {
    color: "white",
    textDecorationColor: "white",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  };

  return (
    <Stack sx={{ width: { md: "25%", xs: "100%" } }}>
      <Typography sx={{ textDecoration: "underline" }} variant="h6">
        Social Media
      </Typography>
      <Typography variant="body2">
        <Link sx={linkStyle} href="https://www.facebook.com/Pho4EverWC/">
          FaceBook
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link sx={linkStyle} href="https://www.instagram.com/pho4everwc/?hl=en">
          Instagram
        </Link>
      </Typography>
      <Typography variant="body2">
        <Link
          sx={linkStyle}
          href="https://www.yelp.com/biz/pho-4-ever-webb-city"
        >
          Yelp
        </Link>
      </Typography>
    </Stack>
  );
}
