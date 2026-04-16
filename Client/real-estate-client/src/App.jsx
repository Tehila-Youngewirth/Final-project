import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Search from "./pages/Search"
import PropertyDetails from "./pages/PropertyDetails"
import Favorites from "./pages/Favorites"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
