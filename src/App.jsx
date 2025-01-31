import React from 'react'
import {  ThemeProvider} from '@mui/material/styles';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme'
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {

  return (
   <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
      <Box sx={styles.container}>
        <Sidebar/>
        <Box component={'main'} sx={styles.mainSection}>

        </Box>

      </Box>
    </ThemeProvider>
   </React.Fragment>
  )
}

/**
 *  @type {import {SxProps  } from "@mui/material";}
 */
const styles = {
  container:{
      display: 'flex',
      bgcolor:'neutral.light',
      height:'calc(100% - 64px)'
  },
  mainSeciton:{
    p:1,
    width:'100%',
    height:'100%',
    overflow:'auto'
  }
}

export default App
