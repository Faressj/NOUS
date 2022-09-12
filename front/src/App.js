import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Hero from './components/Home/Hero';
import Navbar from './components/Navbar';
 

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hero/:id" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
