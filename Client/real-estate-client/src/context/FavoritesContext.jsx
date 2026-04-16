import { createContext, useState, useEffect } from "react"

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (property) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === property.id)) return prev
      return [...prev, property]
    })
  }

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
