import './App.css';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Routes, Route } from 'react-router-dom';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Question from './components/Question';
import NotFound from './components/NotFound';

import Nav from './components/Nav';
import './assets/css/Nav.css';

function App() {

  return (
    <>
      <div>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App