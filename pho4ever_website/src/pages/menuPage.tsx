import * as React from "react";

import { Container, Typography } from "@mui/material";
import {
  appetizers,
  beverages,
  extras,
  pho,
  specials,
} from "../constants/menu_items";
import MenuItem from "../components/menuItem";

export default function Menu() {
  return (
    <Container maxWidth="sm" className="my-6">
      <Beverages />
      <Appetizers />
      <Specials />
      <Pho />
      <Extras />
    </Container>
  );
}

function Beverages() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginTop: "48px", marginBottom: "32px" }}
        className="w-100 text-slate-700 text-center underline"
      >
        BEVERAGES
      </Typography>

      {beverages.map((bvg) => {
        return <MenuItem key={bvg.name} {...bvg} />;
      })}
    </>
  );
}

function Appetizers() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginTop: "48px", marginBottom: "32px" }}
        className="w-100 text-slate-700 text-center underline"
      >
        APPETIZERS
      </Typography>

      {appetizers.map((app) => {
        return <MenuItem key={app.name} {...app} />;
      })}
    </>
  );
}

function Specials() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginTop: "48px", marginBottom: "32px" }}
        className="w-100 text-slate-700 text-center underline"
      >
        SPECIALS
      </Typography>

      {specials.map((spc) => {
        return <MenuItem key={spc.name} {...spc} />;
      })}
    </>
  );
}

function Pho() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginTop: "48px", marginBottom: "32px" }}
        className="w-100 text-slate-700 text-center underline"
      >
        PHỞ
      </Typography>

      {pho.map((pho) => {
        return <MenuItem key={pho.name} {...pho} />;
      })}
    </>
  );
}

function Extras() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginTop: "48px", marginBottom: "32px" }}
        className="w-100 text-slate-700 text-center underline"
      >
        EXTRAS
      </Typography>

      {extras.map((ext) => {
        return <MenuItem key={ext.name} {...ext} />;
      })}
    </>
  );
}
