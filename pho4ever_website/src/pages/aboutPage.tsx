import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { APP_PATH } from "../constants/pages";

export default function About() {
  return (
    <Container className="my-20 text-center" maxWidth="md">
      <Typography className="italic text-gray-800" variant="h4">
        Amazing&nbsp;Place. Authentic&nbsp;Taste
      </Typography>

      <Box
        component={"div"}
        className="bg-slate-300"
        sx={{
          height: "5px",
          borderRadius: "15px",
          margin: "35px auto",
          width: "75px",
        }}
      />

      <Typography variant="body1" className="text-gray-800">
        Pho-4-Ever is a family owned and operated restaurant in Webb City. It
        was started in 2020, and continues to fulfill the owners dream of
        bringing Vietnamese culture and food to America. The menu is constantly
        changing as new ways are found to bring a delicious culture of food at
        an excellent price. Come enjoy a taste of Southeast Asia!
      </Typography>

      <Box
        component={"div"}
        className="bg-slate-300"
        sx={{
          height: "5px",
          borderRadius: "15px",
          margin: "35px auto 0",
          width: "200px",
        }}
      />

      <Stack
        className="mt-12"
        gap={2}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Box component="div" className="flex-initial">
          <Box
            sx={{ width: "100%" }}
            component={"img"}
            src={`${APP_PATH}images/cashRegisterCart.webp`}
          />
        </Box>
        <Box component="div" className="flex-initial">
          <Box
            sx={{ width: "100%" }}
            component={"img"}
            src={`${APP_PATH}images/back_of_store.webp`}
          />
        </Box>
        <Box component="div" className="flex-initial">
          <Box
            sx={{ width: "100%" }}
            component={"img"}
            src={`${APP_PATH}images/front_of_store.webp`}
          />
        </Box>
      </Stack>
    </Container>
  );
}
