import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CourseDetails from './pages/CourseDetails'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Counselling from './pages/Counselling'
import Collaboration from './pages/Collaboration'
import CollegeList from './pages/CollegeList'
import UniversityComparison from './pages/UniversitiyComparison'
import Universities from './pages/Universities'
import UniversityPage from './pages/UniversityPage'

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
          <Route path='/counselling' element={<Counselling />} />
          <Route path='/collaboration' element={<Collaboration />} />
          <Route path='/universityComp' element={<UniversityComparison />} />
          <Route path='/university' element={<Universities />} />
          <Route path="/university/:id" element={<UniversityPage />} />
          <Route path="/colleges/:courseName" element={<CollegeList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
