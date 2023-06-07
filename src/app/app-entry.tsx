import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
const root = document.getElementById('root') as HTMLElement
import { appRouter } from '@/app/app-router'
import '@/shared/base.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer />
  </React.StrictMode>
)