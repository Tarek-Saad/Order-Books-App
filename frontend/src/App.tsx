import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DayOffers from './pages/DayOffers'
import Layout from './components/Layout/Layout'
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/day-offers" element={<DayOffers />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </div>
  )
}

export default App
