import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./mui/ButtonAppBar";
import BottomAppBar from "./mui/BottomAppBar";
import EnhancedTable from "./mui/EnhancedTable";
import SwipeableTextMobileStepper from "./mui/SwipeableTextMobileStepper";
// import ImageListItemBar from "./mui/ImageListItemBar";
import ToggleColorMode from "./mui/ToggleColorMode";
import ResponsiveAppBar from "./mui/ResponsiveAppBar";
import DividerStack from "./mui/DividerStack";
import NestedGrid from "./mui/NestedGrid";
import LabelBottomNavigation from "./mui/LabelBottomNavigation";
// import ScrollableTabsButtonAuto from "./mui/ScrollableTabsButtonAuto";
import { Box, Stack, Typography } from "@mui/material";
// import SimpleContainer from "./mui/SimpleContainer";
import BasicStack from "./mui/BasicStack";
import CustomPaginationGrid from "./mui/CustomPaginationGrid";
import { bgcolor } from "@mui/system";
// New Code Frome NewApp Folder
import Navbar from "./NewApp/Navbar";
import Sidebar from "./NewApp/Sidebar";
import Rightbar from "./NewApp/Rightbar";
import Feed from "./NewApp/Feed";

function App() {
  return (
    <Box className="App">
      {/* Add App Barr */}
      {/* <ResponsiveAppBar /> */}

      {/* Add type Text */}
      {/* <Typography
        variant="h6"
        sx={{ "&:hover": { bgcolor: "blue", transition: "1s" } }}
      >
        HELLO
      </Typography> */}

      {/* <Navbar /> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
