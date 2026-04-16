import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext)

  return (
    <div className="container">
      <h1 className="title">My Favorites</h1>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map((property) => (
        <div className="card" key={property.id}>
          <h3>{property.title}</h3>
          <p>{property.price}</p>
          <button
            className="button"
            onClick={() => removeFromFavorites(property.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
