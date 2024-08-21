// Content
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'

function App() {
  

  return (
    <div className='h-full w-[100%] flex flex-col'>
      <Header />
      <hr />
      <Home />
      <Services />
      <hr className='h-0.5 w-full bg-black'/>
      <Projects />
      <hr />
      <Footer />
    </div>
  )
}

export default App
