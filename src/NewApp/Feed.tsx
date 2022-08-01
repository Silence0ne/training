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
// import { Box, styled } from "@mui/system";
// import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight, Mail } from "@mui/icons-material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Feed = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const click = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  return (
    <Box bgcolor="red" flex={7}>
      <AppBar position="relative">
      <StyledToolbar>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <IconButton>
              <KeyboardArrowLeft sx={{bgcolor: "#7d7d7d", color:"white", borderRadius: "50px", padding: "5px"}}  />
            </IconButton>
            {/* ------------------ */}
            <IconButton>
              <KeyboardArrowRight sx={{bgcolor: "#7d7d7d", color:"white", borderRadius: "50px", padding: "5px"}} />
              </IconButton> 
    </Box>
        <TokenIcon sx={{ display: { xs: "block", sm: "none" } }} />
        
        <Stack direction="row" spacing={1}>
          <Chip
            sx={{ color: "#fff" }}
            avatar={<Avatar>M</Avatar>}
            label="MahdiPK"
            onClick={click}
            icon={<ArrowDropDownIcon/>}
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
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Feed;
