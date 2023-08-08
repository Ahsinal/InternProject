import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
  );
}

export default App;