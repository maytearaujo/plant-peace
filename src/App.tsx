import Footer from "./components/Footer"
import Header from "./components/Header"
import Routes from "./routes/routes"
import MostPopular from "./components/MostPopular"
import './index.css'

function App() {

  return (
    <div className="bg-white text-primaryLunarGreen">
      <Header /> 
      <Routes /> 
      <MostPopular/>
      <Footer /> 
     </div>

  )
}

export default App
