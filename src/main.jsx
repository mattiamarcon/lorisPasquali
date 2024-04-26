import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Contatti from './pages/Contatti.jsx'
import Storia from './pages/Storia.jsx'
import AttivitaInCorso from './pages/AttivitaInCorso.jsx'
import ProgettiCompletati from './pages/ProgettiCompletati.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/contatti",
    element: <Contatti />,
    errorElement: <Error />
  },
  {
    path: "/storia",
    element: <Storia />,
    errorElement: <Error />
  },
  {
    path: "/attivita-in-corso",
    element: <AttivitaInCorso />,
    errorElement: <Error />
  },
  {
    path: "/progetti-completati",
    element: <ProgettiCompletati />,
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);