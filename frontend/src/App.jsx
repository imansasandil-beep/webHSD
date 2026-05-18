import { useState } from "react"

function App() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <div className="container">
      <nav>
        <a href="/" className="logo">HSD<span style={{color: "var(--primary-color)"}}>.</span></a>
        <div className="nav-links">
          <a href="#">Services</a>
          <a href="#">Locations</a>
          <a href="#">Support</a>
        </div>
      </nav>
      <main className="hero">
        <h1>High Speed Delivery</h1>
        <p>Global logistics and package tracking made simple, transparent, and ultra-fast.</p>
        <div className="glass-panel">
          <h2>Track your package</h2>
          const handleTrack = async (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`http://localhost:3000/api/track/${trackingNumber}`)
      const data = await response.json()
      if (data.success) setResult(data)
      else setError("Not found")
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
            <input type="text" value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter your tracking number (e.g. HSD123456)" />
            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Track"}
            </button>
          </form>

          {error && <p style={{color: "#ef4444", marginTop: "1rem"}}>{error}</p>}

          {result && (
            <div className="tracking-result">
              <div className="status-badge">{result.status}</div>
              <h3>Tracking: {result.trackingNumber}</h3>
              <p>Current Location: <strong style={{color: "white"}}>{result.location}</strong></p>
              <p>Estimated Delivery: <strong style={{color: "white"}}>{result.estimatedDelivery}</strong></p>

              <div className="timeline">
                {result.history.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-event">{item.event}</div>
                    <div className="timeline-location">{item.location}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
