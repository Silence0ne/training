import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MediaControlCard from "./MediaControlCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          background: "rgb(102 102 102)",
        }}
      >
        <MediaControlCard />

        <MediaControlCard />

        <MediaControlCard />
      </Stack>
    </div>
  );
}
