import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import "../App.css"
import PropTypes from 'prop-types';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import logo from "../images/logo.png"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import RouterIcon from '@mui/icons-material/Router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const drawer = (

    <Box onClick={handleDrawerToggle}

      sx={{ textAlign: 'center' }}



    >
      <Typography variant="h6"





      >
        <div className=' leading-4 xl:w-36 sm:w-36 sm:text-center
             xl:text-center cursor-pointer  h-[80px] flex justify-center'>
          <img src={logo} className='sm:w-[73] w-[65]' alt="logo" />
        </div>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding style={{
          marginBottom: "10px"
        }}>
          <ListItemButton sx={{ paddingLeft: 4, color: '#001f3f' }}>
            <ListItemText primary={"Network Expansion"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding style={{
          marginBottom: "10px"
        }}>
          <ListItemButton sx={{ paddingLeft: 4, color: '#001f3f' }}>
            <ListItemText primary={"Adapters"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ paddingLeft: 4, color: '#001f3f' }}>
            <ListItemText primary={"Mesh Wi-Fi"} />
          </ListItemButton>
        </ListItem>

      </List>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}

      >


        <ListItemButton onClick={() => {
          handleDrawerToggle()
          handleClick()
        }}>

          <ListItemText style={{
            marginLeft: 17,
          }} primary="Routers" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <RouterIcon style={{ fill: '#000' }} />
              <ListItemText style={{
                textAlign: "center"
              }} primary="TP Link" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <RouterIcon style={{ fill: '#000' }} />
              <ListItemText style={{
                textAlign: "center"
              }} primary="Hawai" />
            </ListItemButton>
          </List>  <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <RouterIcon style={{ fill: '#000' }} />
              <ListItemText style={{
                textAlign: "center"
              }} primary="D Link" />
            </ListItemButton>
          </List>  <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <RouterIcon style={{ fill: '#000' }} />
              <ListItemText style={{
                textAlign: "center"
              }} primary="Tenda" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' , justifyContent: "space-between" }}>
      <CssBaseline />
      {/* <MyDialogAuthComponent /> */}
      <AppBar component="nav" style={
        {
          backgroundColor: "#001F3F",
          height: "80px",
          position: "relative", 
        }
      }>
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{ fill: '#fff', height: "45px", width: "45px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, textAlign: {
                xs: 'right',
                sm: 'left',
              }, display: { sm: 'block' }
            }}
          >

            <div className=' leading-4 xl:w-36 sm:w-36 sm:text-center
             xl:text-center cursor-pointer  h-[80px] flex justify-end sm:justify-center'>

              <img src={logo} className='sm:w-[73] w-[65]' alt="logo" />
            </div>
          </Typography>




          <Box sx={{
            display: {
              xs: 'none',
              sm: 'block',
            }
          }}>
            <ul class="main-navigation mr-3 row-list">

              <li className='listitem cursor-pointer'><span className='dropitem' href="#">Services <ArrowDropDownIcon style={{ fill: '#fff' }} /></span>
                <ul className='row-list'>
                  <li className='listitem backgro'
                  ><a className='dropitem ' href="#">Network Expansion</a></li>
                  <hr className=' border-[#2c3e50] h-[1px]' />
                  <li className='listitem backgro'><a className='dropitem' href="#">Adapters</a></li>
                  <hr className=' border-[#2c3e50] h-[1px]' />
                  
                  <li className='listitem backgro'><a className='dropitem' href="#">Mesh Wi-Fi</a></li>
                  <hr className=' border-[#2c3e50] h-[1px]' />

                  <li className='listitem'><a className='dropitem' href="#">Routers</a>
                    <ul className='row-list'>
                      <li className='listitem backgro'><a className='dropitem' href="#"><RouterIcon style={{ fill: '#fff' }} /> TP-Link </a></li>
                      <hr className=' border-[#2c3e50] h-[1px]' />
                      <li className='listitem backgro'><a className='dropitem' href="#"><RouterIcon style={{ fill: '#fff' }} /> D-Link</a></li>
                      <hr className=' border-[#2c3e50] h-[1px]' />
                      <li className='listitem backgro'><a className='dropitem' href="#"><RouterIcon style={{ fill: '#fff' }} /> Tenda</a></li>
                      <hr className=' border-[#2c3e50] h-[1px]' /> <li className='listitem backgro'><a className='dropitem' href="#"><RouterIcon style={{ fill: '#fff' }} /> Huawei</a></li>

                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>



            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="#ffffff"

            >


              <Badge badgeContent={2} style={{
                marginRight: "22px"
              }} color="error">
                <AddShoppingCartIcon style={{ fill: '#fff' }} />
              </Badge>


            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="#ffffff"

            >


              <Badge badgeContent={2} style={{
                marginRight: "22px"
              }} color="error">
                <FavoriteBorderIcon style={{ fill: '#fff' }} />
              </Badge>


            </IconButton>
            <NavLink to={"/login"}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
            // color="#fff"
            >
             <AccountCircle style={{ fill: '#fff' }} />
            </IconButton>
</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;