import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
const App=()=>{

  return(
    <>
    <ThemeProvider theme={(theme)}>
      <CssBaseline/>
    <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                        
                    </Routes>
                </BrowserRouter>
    </ThemeProvider>
         
    </>
  )
}

export default App