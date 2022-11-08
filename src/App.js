import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Carousel } from "./components/Carousel/Carousel";
import { Cards } from "./components/Cards/Cards"
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/Shop";
import { Quienessomos } from "./components/pages/Quienessomos";
import { CartProvider } from "./components/context/CartContext";



function App() {

  return (
    <>

      <CartProvider>
      <NavBar></NavBar>

      <Routes>
           
        <Route path="/" element={<Home />}/>
        <Route path="/Shop" element={<Shop />}/>
        <Route path="/Quienes" element={<Quienessomos />}/>
      
      </Routes>
      
      <br></br>
      
      <Footer></Footer>
      </CartProvider>
      
    </>
  );
}


export default App;
