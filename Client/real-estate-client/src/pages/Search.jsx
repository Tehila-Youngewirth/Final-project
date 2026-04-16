export default function Search() {
  return (
    <div className="container">
      <h1 className="title">Search Properties</h1>

      <input className="input" placeholder="City" />
      <input className="input" placeholder="Min Price" />
      <input className="input" placeholder="Max Price" />
      <input className="input" placeholder="Rooms" />

      <button className="button">Search</button>
    </div>
  )
}
