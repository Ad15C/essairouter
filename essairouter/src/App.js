import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Time from './pages/Time';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/About'>A Propos</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Time'>Heure</Link>
      </nav>

      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/Time' element={<Time />}></Route>
    </Routes>
      
   </div>
  );
}

export default App;
