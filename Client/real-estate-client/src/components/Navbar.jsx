import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "../styles/global.css"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav className="navbar">
      <div className="nav-logo">Luxury Real Estate</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>

        {user && <Link to="/favorites">Favorites</Link>}
        {user && <Link to="/profile">Profile</Link>}

        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <span onClick={logout} style={{ cursor: "pointer" }}>
            Logout ({user.email})
          </span>
        )}
      </div>
    </nav>
  )
}
