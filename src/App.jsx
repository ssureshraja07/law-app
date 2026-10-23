import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Profile from './pages/Profile'
import ContactUs from './pages/ContactUs'
import Appointments from './pages/Appointments'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}

export default App