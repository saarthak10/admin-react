import { Box,Grid2, IconButton, Typography} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Home'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <Box  mt={8} >

      <Grid2>
          <Box component='img' src='/src/assets/profilePic.png' sx={{ borderRadius:'50%', borderWidth:'4px' , borderColor:'red',height:'140px', width:'140px' , backgroundColor:'red'}} >
          </Box>
      </Grid2>
      <Grid2 classname = 'sidebar-item'>
       
          <IconButton>
            <DashboardIcon />
          </IconButton>
          <Typography>
            Dashboard
          </Typography>
       
      </Grid2>
      
    </Box> 
  )
}

export default Sidebar