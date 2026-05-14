import { useState } from "react"

function App() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <div className="container">
      <nav>
        <a href="/" className="logo">HSD<span>.</span></a>
        <div className="nav-links">
          <a href="#">Services</a>
        </div>
      </nav>
      <main className="hero"></main>
    </div>
  )
}

export default App
