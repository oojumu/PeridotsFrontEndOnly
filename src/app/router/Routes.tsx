import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
//import Catalog from "../../features/catalog/Catalog";
//import HomePage from "../../features/home/HomePage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            // { path: '', element: <HomePage />},
             { path: 'catalog', element: <Catalog />},
            // { path: 'catalog/:id', element: <ProductDetails />},
            // { path: 'about', element: <AboutPage />},
            // { path: 'contact', element: <ContactPage />},
            // { path: 'server-error', element: <ServerError />},
            // { path: 'not-found', element: <NotFound/>},
            // // { path: 'basket', element: <BasketPage />},
            // { path: 'not-found', element: <NotFound />},
            { path: '*', element: <Navigate replace to='/not-found' />}

        ]       
    }
])