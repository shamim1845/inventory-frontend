import Home from "./pages/Home/Home"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/dashboard/Dashboard"




function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={  <Home />} />
        <Route path="/login" element={  <Login />} />
        <Route path="/register" element={  <Register />} />
        <Route path="/dashboard" element={  <Dashboard />} />
      </Routes>
    
    </div>
  )
}

export default App
