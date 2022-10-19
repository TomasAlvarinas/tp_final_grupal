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


function App() {

  return (
    <>

      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <Carousel></Carousel>
      <Cards></Cards>
      <Footer></Footer>
      
    </>
  );
}


export default App;
