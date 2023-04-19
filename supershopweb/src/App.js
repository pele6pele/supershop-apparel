import './App.css'
import Navbar from './components/Navbar'
import MainLeft from './components/MainLeft'
import MainRight from './components/MainRight'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <main className="c">
          <MainLeft />
          <MainRight />
        </main>
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default App
