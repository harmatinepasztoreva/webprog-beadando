import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Ez a "React" menüpont (Fetch vagy statikus)
import AxiosApp from './axios.jsx' // Ez az "Axios" menüpont

// Itt dől el az URL alapján, melyik verziót mutassuk
const isAxiosPage = window.location.pathname.includes('axios.html');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* A helyes változónevet használjuk a kérdésnél */}
    {isAxiosPage ? <AxiosApp /> : <App />}
  </StrictMode>,
)