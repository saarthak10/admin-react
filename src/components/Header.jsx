import { AppBar, Box, IconButton, Toolbar} from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout'


const Header = () => {
  return (
    <AppBar position='sticky' sx={styles.appBar}>
        <Toolbar>
            <IconButton color='secondary'>
                <MenuTwoToneIcon />
            </IconButton>
            <Box component={'img'} sx={styles.logo} src='/src/assets/logo.png'/>
            <Box sx={{flexGrow:1}} />    
            <IconButton color='secondary'>
            <Badge badgeContent={4} color='error'>
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
        bgcolor: 'neutral.main'
    },
    logo:{
        p:0.5
    }
}

export default Header