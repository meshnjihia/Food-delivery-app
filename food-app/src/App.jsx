import Cards from "./components/Cards"
import Category from "./components/Category"
import Food from "./components/Food"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Category/>
    </div>
  )
}

export default App
