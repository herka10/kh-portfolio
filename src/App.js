//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/home'
import ContactPage from './pages/contact'

function App() {
  const [view, setView] = useState('home')

  
  const renderView = () => {
    if (view === 'home') {
      return <HomePage />
    } else if (view === 'contact') {
      return <ContactPage />
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
    </>
  );
}

export default App;
