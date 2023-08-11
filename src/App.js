import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button, NavbarBrand } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbarr/Navbarr';
import Contact from './Pages/Contact/Contact'
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import WishList from './Pages/WishList/WishList';
import Cart from './Pages/Cart/Cart';
function App() {
  return (
 <>
 <NavbarBrand/>
 <Navbarr/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/wishlist' element={<WishList/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
 </>
  );
}

export default App;
