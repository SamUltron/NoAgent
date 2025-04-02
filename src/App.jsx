import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import Choose from "./pages/Choose"
import GetIn from "./pages/GetIn"
import How from "./pages/How"
import OurUser from "./pages/OurUser"
import Reason from "./pages/Reason"

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
    <div>
      <Header/>
      <Hero/>
      <How/>
      <Reason/>
      <Choose/>
      <OurUser/>
      <GetIn/>
    </div>
  )
}

export default App
