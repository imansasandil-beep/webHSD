import { useState } from "react"

function App() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <div className="container">
      Hello World
    </div>
  )
}

export default App
