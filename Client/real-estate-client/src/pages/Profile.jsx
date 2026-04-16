import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function Profile() {

  const { user, logout } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="container">
      <h1 className="title">My Profile</h1>

      <div className="card">
        <p><strong>Email:</strong> {user.email}</p>

        <button className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
