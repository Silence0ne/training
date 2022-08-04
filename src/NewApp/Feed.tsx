import {
  AppBar,
  Avatar,
  Chip,
  Stack,
  Toolbar,
  Menu,
  MenuItem,
  Badge,
  alpha,
  Icon,
} from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Box, styled } from "@mui/system";
// import React from "react";
import {
  Block,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Mail,
} from "@mui/icons-material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { green } from "@mui/material/colors";
import { borderRadius } from "@mui/system";

const PlayArrowIconCard = styled(PlayArrowIcon)(({ theme }) => ({
  height: 38,
  width: 38,
  padding: "5px",
  borderRadius: "50px",
  backgroundColor: "#1DB954",
}));

const CardMusic = styled(Card)(({ theme }) => ({
  margin: "10px",

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  backgroundColor: "#2d2d2d",
  color: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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
    <Box bgcolor="#191414" flex={7}>
      <AppBar sx={{bgcolor: "white.1"}} position="relative">
        <StyledToolbar>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <IconButton>
              <KeyboardArrowLeft
                sx={{
                  bgcolor: "#7d7d7d",
                  color: "white",
                  borderRadius: "50px",
                  padding: "5px",
                }}
              />
            </IconButton>
            {/* ------------------ */}
            <IconButton>
              <KeyboardArrowRight
                sx={{
                  bgcolor: "#7d7d7d",
                  color: "white",
                  borderRadius: "50px",
                  padding: "5px",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </IconButton>
          </Box>
          <TokenIcon sx={{ display: { xs: "block", sm: "none" } }} />

          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ color: "#fff" }}
              avatar={<Avatar>M</Avatar>}
              label="MahdiPK"
              onClick={click}
              // icon={<ArrowDropDownIcon />}
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

          <MenuItem onClick={click} sx={{ p: "0 10px" }}>
            <IconButton size="large">
              <Badge badgeContent={1} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>

          <MenuItem onClick={click} sx={{ p: "0 15px" }}>
            <IconButton>
              <SettingsIcon />
            </IconButton>
            <p>Setting</p>
          </MenuItem>
        </Menu>
      </AppBar>
                <Typography margin= "5px" variant="h5" color= "#fff">
                  Good afternoone
                </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          margin="0!important"
          width="100%!important"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid p="0 !important" item xs={6} sm={8} md={6} sx={{ "& .khiar":{display: "none"}, "&:hover":{"& .khiar": {display: "block"}}}}>
            {/* <Item sx={{ bgcolor: ""}}> */}
            <CardMusic sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                  alt="Live from space album cover"
                />
                <CardContent
                  sx={{ flex: "1 10 auto", justifyContent: "space-between" }}
                >
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    Mac Miller
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIconCard className="khiar" />
                  </IconButton>
                </Box>
              </Box>
            </CardMusic>
            {/* </Item> */}
          </Grid>
          <Grid p="0 !important" item xs={6} sm={8} md={6}>
            <CardMusic sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                  alt="Live from space album cover"
                />
                <CardContent sx={{ flex: "1 10 auto" }}>
                  <Typography component="div" variant="h5">
                    what do it
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    ljdsodj
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIconCard />
                  </IconButton>
                </Box>
              </Box>
            </CardMusic>
          </Grid>
          <Grid p="0 !important" item xs={6} sm={8} md={6}>
            <CardMusic sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                  alt="Live from space album cover"
                />
                <CardContent sx={{ flex: "1 10 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From jefer
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    jefer
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIconCard />
                  </IconButton>
                </Box>
              </Box>
            </CardMusic>
          </Grid>
          <Grid p="0 !important" item xs={6} sm={8} md={6}>
            <CardMusic sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                  alt="Live from space album cover"
                />
                <CardContent sx={{ flex: "1 10 auto" }}>
                  <Typography component="div" variant="h5">
                    GooD From Space
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    Mac Mahdi
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIconCard />
                  </IconButton>
                </Box>
              </Box>
            </CardMusic>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Feed;
