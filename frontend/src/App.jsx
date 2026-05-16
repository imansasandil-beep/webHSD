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
  }

  return (
    <div className="container">
            <input type="text" placeholder="Enter your tracking number (e.g. HSD123456)" />
            <button type="submit">Track</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
