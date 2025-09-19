import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { HelmetProvider } from '@vuer-ai/react-helmet-async'
import { Toaster } from 'react-hot-toast'
// import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
          </>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
