// Content
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Info from './pages/Info'

function App() {
  

  return (
    <div className='h-full w-[100%] flex flex-col'>
      <Header />
      <hr className="border-t border-white" />
      <Home />
      <Services />
      <Info />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
