import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Route.jsx'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Providers/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" />
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)


