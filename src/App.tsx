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
import { Typography } from "@mui/material";
// import SimpleContainer from "./mui/SimpleContainer";
import BasicStack from "./mui/BasicStack";
import CustomPaginationGrid from "./mui/CustomPaginationGrid";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ bgcolor: "#e8f5e9" }} className="App">
      {/* <BottomAppBar />
      <EnhancedTable />
      <SwipeableTextMobileStepper /> */}
      <ResponsiveAppBar />
      {/* <ImageListItemBar /> */}
      <Typography
        variant="h5"
        align="left"
        paddingLeft={10}
        sx={{
          background: "#e8f5e9",
          width: 100,
          borderBottomRightRadius: "10px",
        }}
      >
        Mood
      </Typography>
      <DividerStack />

      <Typography
        variant="h5"
        align="left"
        paddingLeft={10}
        sx={{
          background: "#1b5e20",
          width: 150,
          borderBottomRightRadius: "10px",
        }}
      >
        {" "}
        WorkOut
      </Typography>
      <DividerStack />
      <DividerStack />

      <Typography
        variant="h5"
        align="left"
        paddingLeft={10}
        sx={{
          background: "#7d7d7d",
          width: 150,
          borderBottomRightRadius: "10px",
        }}
      >
        {" "}
        Natural
      </Typography>
      <DividerStack />
      <NestedGrid />
      <CustomPaginationGrid />
      {/* <ScrollableTabsButtonAuto /> */}
      {/* <SimpleContainer /> */}
      {/* <BasicStack /> */}
      {/* <LabelBottomNavigation /> */}
    </Box>
  );
}

export default App;
