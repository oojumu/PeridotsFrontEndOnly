import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
//import { router } from './app/router/Routes.tsx';
import { router } from './app/router/Routes.tsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)