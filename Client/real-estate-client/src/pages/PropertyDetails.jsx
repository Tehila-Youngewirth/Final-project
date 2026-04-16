import { useParams } from "react-router-dom"
import { properties } from "../data/properties"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"


export default function PropertyDetails() {
  const { id } = useParams()
  const { addToFavorites } = useContext(FavoritesContext)
  
  


  const property = properties.find(
    (p) => p.id === Number(id)
  )

  if (!property) {
    return <div className="container">Property not found</div>
  }





  return (

    
    <div className="container">
      <h1 className="title">{property.title}</h1>

      <div className="card">
                    <img
            src={property.image}
            alt={property.title}
            className="details-image"
/>

        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Rooms:</strong> {property.rooms}</p>
        <p><strong>Size:</strong> {property.size} sqm</p>
        <p><strong>Description:</strong> {property.description}</p>
      </div>
        <button
  className="button"
  onClick={() => addToFavorites(property)}
>
  Add to Favorites
</button>
    </div>
  )
}
