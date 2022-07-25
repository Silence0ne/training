import { Box, InputBase, styled } from "@mui/material";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "100  %",
}));

const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Search sx={{}}>
        <InputBase placeholder="Search..."></InputBase>
      </Search>
      Sdiebar
    </Box>
  );
};

export default Sidebar;
