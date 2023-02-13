import { useState } from 'react'
import Navbar from './components/navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio';
import Resume from './pages/resume'
import Footer from './components/footer'
//import Page from './components/page'
//import Header from './components/header'

function App() {
  const [view, setView] = useState('about')

  
  const renderView = () => {
    if (view === 'about') {
      return <About />
    } else if (view === 'portfolio') {
      return <Portfolio />
    } else if (view === 'resume') {
      return <Resume />
    } else if (view === 'contact') {
      return <Contact />
    } else {
      return 'No matching view found'
    }
  }

  return (
    <>
      <Navbar 
        view={view}
        setView={setView}
      />
      { renderView() }
      <Footer />
    </>
  );
}

export default App;
