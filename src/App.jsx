import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
// import Signup from "./components/Signin"
// import Signin from "./components/Signin"
import Signupp from "./components/Signupp"
import Signinn from "./components/Signinn"
import Footer from "./components/Footer"


// Iine color code 
// CBCBCB


// Text color to code
// 4E2A0F 

// Button color code
//  CBA135 and F5F5F5

// Color code: 33333
// inter (medium, bold, semi bold and regular)

// Bottom (sign up and sign in)
// Color code: CBA135   (text: F5F5F5)

// User information
// Color code: DOCFCF
// Text: F5F5F5 

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signupp/>}/>
          <Route path="/sign" element={<Signinn/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
