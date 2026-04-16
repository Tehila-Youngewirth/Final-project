import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css"
import { FavoritesProvider } from "./context/FavoritesContext"
import { AuthProvider } from "./context/AuthContext"




createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
</AuthProvider>


)
