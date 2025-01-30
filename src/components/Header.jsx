import { AppBar, Box, IconButton, Toolbar} from '@mui/material'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';


const Header = () => {
  return (
    <AppBar position='sticky' sx={styles.appBar}>
        <Toolbar>
            <IconButton color='secondary'>
                <MenuTwoToneIcon />
                <Box component={'img'}/>
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
    }
}

export default Header