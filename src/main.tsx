import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Views/Login.tsx';
import Home from './Views/Home.tsx';
import Contact from './Views/Contact.tsx';
import About from './Views/About.tsx';
import Devices from './Views/Devices.tsx';
import Error_Page from './Components/Error_Page.tsx';
import { ThemeProvider } from './Contexts/ThemeContext.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

const queryClient = new QueryClient(); 

const router = createBrowserRouter([
  {
    element: <App/>,
    errorElement: <Error_Page/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "About",
        element: <About/>,
      },
      {
        path: "Devices",
        element: <Devices/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      },
      {
        path: "Login",
        element: <Login/>,
      }
    ],
  }
]);   

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>

  </StrictMode>,
)