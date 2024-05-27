import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound';

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import Nav from './components/Nav'

function App() {


  return (
    <>
      <div>     
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App