import {
  AppBar,
  Avatar,
  Chip,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";
import { Box, styled } from "@mui/system";
import React from "react";

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none ", sm: "block" } }}>
          HOSS...
        </Typography>
        <TokenIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Icons>Icons</Icons>
        <Stack direction="row" spacing={1}>
          <Chip
            sx={{ color: "#fff" }}
            avatar={<Avatar>M</Avatar>}
            label="Avatar"
          />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
