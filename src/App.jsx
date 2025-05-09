import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CourseDetails from './pages/CourseDetails'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Achievements from './pages/Achievements'

function App() {

  return (
    <div className="bg-white text-[#B71D8D] min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courseDetails' element={<CourseDetails />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/achievements' element={<Achievements />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
