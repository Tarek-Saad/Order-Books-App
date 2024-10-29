import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
