import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LogIn from './Pages/LogIn';
import UserDashboard from './Pages/user/userDashBoard';
import UserRoute from './Componenet/UserRoute';
import Layout from './Pages/global/Layout';
import UserJobsHistory from './Pages/user/UserJobHistory';
import { ProSidebarProvider } from 'react-pro-sidebar';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);



const App = () => {

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/admin/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                    </ProSidebarProvider>
                
            </ThemeProvider>
        </>
    )
}

export default App