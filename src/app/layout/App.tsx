

//import Header from './Header'
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
//import { Product } from '../models/Product';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LoadingComponent from './LoadingComponent';
import HomePage from '../../features/home/HomePage';
import Header from './Header';
//import HomePage from '../../features/home/HomePage';
//import LoadingComponent from './LoadingComponent';


function App() {

    const location = useLocation();
   // const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {

        await dispatch();
            // try {
                
            //     await dispatch();

            // } 
            // catch (error) 
            // {
            //     console.log();
            // }


    }, []);
    const [darkMode, setDarkMode] = useState(false);

    const paletteType =  darkMode ? 'dark' : 'light';

    const theme = createTheme({
            palette:{
                mode: paletteType,
                background: {
                    default:  paletteType === 'light' ? '#eaeaea' : '#121212'
                }
            }
    })


    useEffect(() => {
        initApp().then(() => setLoading(false));

    }, [initApp])


    //  useEffect(() => {
    //     DoNothing();
    //     .finally();
    // }, [])


  
    function handleThemeChange()
    {
        setDarkMode(!darkMode);
    }

    //if (loading) return 

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position="bottom-right" hideProgressBar theme ="colored" />
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange } />
            {loading ?   <LoadingComponent message="Initialising app..."/>      
                        : location.pathname === `/` ? <HomePage />
                        : <Container sx = {{mt: 4}}>
                            <Outlet />               
                          </Container>
                }
          {/* <Container sx = {{mt: 4}}>
                            <Outlet />               
                          </Container>
             */}
        </ThemeProvider>

    );
}

export default App;


function dispatch() {
    throw new Error('Function not implemented.');
}