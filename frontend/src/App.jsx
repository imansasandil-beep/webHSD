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
        <p>Global logistics and package tracking made simple.</p>
      </main>
    </div>
  )
}

export default App
