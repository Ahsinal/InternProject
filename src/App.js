import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbarr/Navbarr';
function App() {
  return (
 <>
 <NavbarBrand/>
 <Navbarr/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   <Footer/>
 </>
  );
}

export default App;
