import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home'
import Game from './game'
import Market from './market'
import How from './how'
function App() {
  return (

    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/market" element={< Market />} />
        <Route path="/how" element={< How />} />
      </Routes>
    </Router>
  )
}

export default App
