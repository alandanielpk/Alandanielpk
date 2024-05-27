import Nav from "./components/Nav" 
import Soy from "./components/soy"
import Comentar from "./components/comentar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contenido from "./components/Contenido"
import Fin from "./components/Fin"
import Multimedia from "./components/multimedia/multimedia"
import Desarrollador from "./components/desarrollador/desarrollador"
import Trickin from "./components/Creaciones/Trickin"
import Calculadora from "./components/Creaciones/Calculadora"


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Contenido/>}/>
        <Route path="/soy" element={<Soy/>}/>
        <Route path="/comentar" element={<Comentar/>}/>
      </Routes>
      
      <Routes>
        <Route path="/multimedia" element={<Multimedia/>}/>
        <Route path="/desarrollador" element={<Desarrollador/>}/>
      </Routes>

      <Routes>
        <Route path="/Trickin" element={<Trickin/>}/>
        <Route path="/Calculadora" element={<Calculadora/>}/>
        <Route path="" element/>
      </Routes>

      <Fin/>
    </BrowserRouter>



    </>
  )
}

export default App
