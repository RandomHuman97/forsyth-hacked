import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home.tsx'
import SignupPage from './pages/SignupPage.tsx'
import Footer from './components/Footer.tsx'
import About from "./pages/About.tsx"

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
