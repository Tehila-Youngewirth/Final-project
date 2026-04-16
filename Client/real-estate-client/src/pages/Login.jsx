import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email) return
    login(email)
    navigate("/profile")
  }

  return (
    <div className="container">
      <h1 className="title">Login</h1>

      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
