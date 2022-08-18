import React from 'react';
// import Link function
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { useState } from 'react';
// import logo1 from './logo1.png';
// import logo2 from './logo2.png';
// import { connect } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { ImageOutlined } from '@mui/icons-material';
// import { ThemeProvider } from '@material-ui/core';
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { withStyles } from '@mui/styles';
import Styles from '../../Styles/Styles';


const drawerWidth = 240;
// const theme = createTheme({
//   palette: {
//     inherit: 'blueGrey'
//   }
// });

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function Navbar() {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const [navbar, setNavbar] = useState(false);

    // const changeIogo = () => {
    //   if (window.scrollY >= 80) {
    //     setNavbar(true);
    //   } else {
    //     setNavbar(false);
    //   }
    // };
    
    // window.addEventListener('scroll', changeIogo);

  return (
      // <Box sx={{ display: 'flex' }}>
      <>
          <CssBaseline />
          <AppBar 
            position="fixed" open={open}
            color="primary"
          >
            <Toolbar>
              <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                GABRIEL
              </Typography>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
              <List>
                <Link to="/" activeclassname="active" className='nav-links' onClick={handleDrawerClose}>
                  Home Page
                </Link>
              </List>
            <Divider />
              <List>
                <Link to="/aboutPage" activeclassname="active" className='nav-links' onClick={handleDrawerClose}>
                  About Page
                </Link>
              </List>
            <Divider />
              <List>
                <Link to="/projectPage" activeclassname="active" className='nav-links' onClick={handleDrawerClose}>
                  Project Page
                </Link>
              </List>
          </Drawer>
        {/* </Box> */}
</>
    // <nav className='navbarlist'>
    //   <div className={navbar ? 'logo1' : 'logo2'}></div>
    //   <div className='nav-container'>
    //     logo
    //     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //       <li className='nav-item'>
    //         <Link to="/" activeclassname="active" className='nav-links'>
    //           Home Page
    //         </Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to="/aboutPage" activeclassname="active" className='nav-links'>
    //           About Page
    //         </Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to="/projectPage" activeclassname="active" className='nav-links'>
    //           Project Page
    //         </Link>
    //       </li>
    //     </ul>
    //     <div className='nav-icon' onClick={handleClick}>
    //       <i className={click ? 'uil uil-multiply' : 'uil uil-bars'} ></i>
    //     </div>
    //   </div> 
    // </nav>
  )
}

// export default withStyles(Styles)(connect()(Navbar))
export default withStyles(Styles)(Navbar)