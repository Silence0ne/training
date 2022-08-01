import { Box, InputBase, styled, IconButton, Typography, alpha, Toolbar, Divider, Link } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { display, width } from "@mui/system";
import { Directions } from "@mui/icons-material";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '0%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  
}));

const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Toolbar sx={{display: "flex", justifyContent: "flex-start", paddingLeft: "0!important"  }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>

        {/* ********************** */}
      <Icons color="#fff" sx={{width: "20%", display:"flex",}}>
      <IconButton>
        <HomeIcon fontSize="large" />
        </IconButton>
        <Link
          component= "button"
          underline="none"
        >
          <Typography color= "#7d7d7d" paddingTop={1}>Home</Typography>
        </Link>
      </Icons>
      
      {/* ************************ */}
      <Icons sx={{width: "auto", display:"flex",}}>
      <IconButton>
        <LibraryMusicIcon fontSize="large" />
        </IconButton>
        <Link
          sx={{paddingtop: "100px"}}
          component="button"
          underline="none"
        >
          <Typography color= "#7d7d7d" paddingTop={2}>Yor Library</Typography>
        </Link>
      </Icons>

      {/* *********************** */}
      <Divider sx={{ my: 0.5 }} />

      {/* *********************** */}
      <Button size="small" sx={{display: "flex", justifyContent: "flex-start"}}>
        <Icons sx={{width: "auto", display:"flex",}}>
        <IconButton>
          <AddIcon sx={{bgcolor: "#fff", p: "2px", borderRadius: "5px"}} fontSize="small" />
          </IconButton>
          <Typography color= "#7d7d7d" paddingTop={1} sx={{display: "flex", flexDirection:"row",}}>Create PlayList</Typography>
        </Icons>
      </Button>  
        {/* ************************** */}
      <Button size="small" sx={{display: "flex", justifyContent: "flex-start", }}>  
        <Icons sx={{width: "auto", display:"flex",}}>
        <IconButton>
          <FavoriteIcon sx={{bgcolor: "#683ab7b7", p: "2px", borderRadius: "5px"}} fontSize="small" />
          </IconButton>
          <Typography color= "#7d7d7d" paddingTop={1} sx={{display: "flex", flexDirection:"row",}}>Liked Songs</Typography>
        </Icons>
       </Button>

       {/* ************* */}
       <Button size="small" sx={{display: "flex", justifyContent: "flex-start", }}>  
        <Icons sx={{width: "auto", display:"flex",}}>
        <IconButton>
          <SubscriptionsIcon sx={{bgcolor: "green", p: "2px", borderRadius: "5px"}} fontSize="small" />
          </IconButton>
          <Typography color= "#7d7d7d" paddingTop={1} sx={{display: "flex", flexDirection:"row",}}>Your Episodes</Typography>
        </Icons>
       </Button>
      
      
    </Box>
  );
};

export default Sidebar;
