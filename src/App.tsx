import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome</div>} />
      <Route path="/home" element={<div>hello world</div>} />
    </Routes>
  )
}

export default App
