import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Views/Home.tsx';
import Contact from './Views/Contact.tsx';
import About from './Views/About.tsx';
import Learn from './Views/Learn.tsx';
import Error_Page from './Components/Error_Page.tsx';
import { ThemeProvider } from './Contexts/ThemeContext.tsx';


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
        path: "Learn",
        element: <Learn/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)