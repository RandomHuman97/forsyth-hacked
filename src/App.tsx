import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar"
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
