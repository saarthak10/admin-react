import { AppBar, Box, IconButton, Toolbar} from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types'



const Header = ({toggleDrawer}) => {
  return (
    <AppBar position='sticky' sx={[styles.appBar,{ zIndex:(theme)=> theme.zIndex.drawer + 1 }]}>
        <Toolbar>
            <IconButton color='secondary'  onClick={toggleDrawer}>
                <MenuTwoToneIcon />
            </IconButton>
            <Box component={'img'} sx={styles.logo} src='/src/assets/logo.png'/>
            <Box sx={{flexGrow:1}} />    
            <IconButton color='secondary'>
            <Badge badgeContent={12} color='error'>
               <NotificationsIcon />    
            </Badge> 
                </IconButton>
            <IconButton color='secondary'>
                <SettingsIcon />
            </IconButton>    
            <IconButton color='secondary'>
                <LogoutIcon />
            </IconButton>  
        </Toolbar>
    </AppBar>
  )
}

/**
 *  @type {import {SxProps  } from "@mui/material";}
 */
const styles = {
    appBar:{
        bgcolor: 'neutral.main',
        zIndex: (theme)=> theme.zIndex + 1
    },
    logo:{
        p:0.5
    }
}

export default Header

Header.propTypes = {
    toggleDrawer: PropTypes.func
  }