import { useState } from 'react'
import Login from './pages/Login.jsx'
import './App.css'
import Analytics from "./pages/Analytics.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Analytics />
    </>
  )
}

export default App
