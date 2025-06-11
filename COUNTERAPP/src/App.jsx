import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh', background:'black', color:'white'}}>
      <h1>Counter</h1>
      <div clasName="counter-section">
        <button>+</button>
        <h3>0</h3>
        <button>-</button>
      </div>
    </div>
  )
}

export default App
