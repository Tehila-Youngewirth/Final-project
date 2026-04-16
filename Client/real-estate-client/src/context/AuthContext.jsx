import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user")
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      localStorage.removeItem("user")
    }
  }, [user])

  // const login = (email) => {
  //   setUser({ email })
  // }

  const login = async (email, password) => {
  try {
    const response = await fetch('https://localhost:7190/api/User/login', { // ודאי שהפורט נכון
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData); // שומר את המשתמש מה-DB (כולל ה-ID והתפקיד)
      return { success: true };
    } else {
      const error = await response.text();
      return { success: false, message: error };
    }
  } catch (err) {
    return { success: false, message: "שגיאת תקשורת עם השרת" };
  }
};
  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
