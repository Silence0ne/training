import {
  AppBar,
  Avatar,
  Chip,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Badge,
} from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, styled } from "@mui/system";
import React from "react";
import { Mail } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const click = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none ", sm: "block" } }}>
          HOSS...
        </Typography>
        <TokenIcon sx={{ display: { xs: "block", sm: "none" } }} />
        
        <Stack direction="row" spacing={1}>
          <Chip
            sx={{ color: "#fff" }}
            avatar={<Avatar>M</Avatar>}
            label="Avatar"
            onClick={click}
            // icon={<ArrowDropDownIcon/>} 
            />
            




        </Stack>
      </StyledToolbar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={click}
      
      >
        <MenuItem sx={{ p: "0 15px" }}>
          
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <p>Profile</p>
        </MenuItem>

        <MenuItem onClick={click} sx={{p: "0 10px"}}>
          <IconButton size="large">
            <Badge badgeContent={1} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>

        <MenuItem onClick={click} sx={{p: "0 15px"}}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <p>Setting</p>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
