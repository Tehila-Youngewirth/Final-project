import { useState } from "react"
import { Link } from "react-router-dom"
import { properties } from "../data/properties"

export default function Home() {
  const [query, setQuery] = useState("")
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [loading, setLoading] = useState(false)

  const handleAISearch = async () => {
    if (!query.trim()) return

    setLoading(true)

    try {
      const response = await fetch("http://localhost:5000/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        console.error("Server error:", response.status)
        setLoading(false)
        return
      }

      const data = await response.json()

      console.log("SERVER RESPONSE:", data)

      // הגנה מלאה אם filters לא קיים
      if (!data || !data.filters) {
        console.error("No filters returned")
        setLoading(false)
        return
      }

      const filters = data.filters

      const results = properties.filter((property) => {
        const city = filters.city?.toLowerCase() || null

        const matchesCity =  !city || (property.title &&  property.title.toLowerCase().includes(city))

        const matchesPrice = !filters.maxPrice ||  Number(property.price.replace(/[^\d]/g, "")) <= filters.maxPrice

        const matchesRooms =!filters.rooms ||   property.rooms === filters.rooms

        return matchesCity && matchesPrice && matchesRooms
      })

      setFilteredProperties(results)

    } catch (error) {
      console.error("AI Search Error:", error)
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1 className="title">Luxury Real Estate</h1>

      <h1 className="title">testtttttttttttttttttttt</h1>

      <p className="subtitle">
        Discover premium properties tailored for you
      </p>

      <div className="ai-search">
        <input
          type="text"
          placeholder="Describe your dream property..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ai-input"
        />

        <button onClick={handleAISearch} className="button">
          {loading ? "Searching..." : "AI Search"}
        </button>
      </div>

      <div className="properties-grid">
        {filteredProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          filteredProperties.map((property) => (
            <div className="card" key={property.id}>
              <img
                src={property.image}
                alt={property.title}
                className="property-image"
              />

              <h3>{property.title}</h3>
              <p>
                {property.price} | {property.rooms} Rooms | {property.size} sqm
              </p>

              <Link
                to={`/property/${property.id}`}
                className="button"
              >
                View
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}