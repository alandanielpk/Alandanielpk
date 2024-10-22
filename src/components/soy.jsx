import '../assets/css/soy.css'

const soy = () => {
  return (
    <header className="soy">
     <h1>Soy Alan Daniel Londoño Chavarria</h1>  
    <h4>Soy un técnico en desarrollo de Software, he trabajado en varios proyectos, llevo 2 años de experiencia como desarrollador. Y quiero mezclar en mi conocimiento como creador multimedia y hacer un cambio único a la hora de diseñar y crear sitios web. Y con estos conocimientos podría dar un aporte al avance mundial de la tecnología, software y diseño. 
     </h4>
     <div className="galeriaAlan">
      <img src='./foto 4 alan.jpeg' alt="foto1" />
      <img src='./Foto 2 Alan.jpg' alt="foto2" />
      <img src='./foto 3 alan.jpg' alt="foto3" />
      <img src='./foto1 alan.JPG' alt="foto4" />
      <img src='./Alan.jpg' alt="foto5" />
      <img src="./Alantrensas.jpg" alt="foto6" />
     </div>
     <div className="line1"></div>
     <div className="grados">
        <h2 className='textocolegio'>Estudios</h2>
        <div className="estudios">
          <a  target='_blank' href='https://www.iemerceditasgomezm.edu.co' className="cajaEscu">
            <img src='./IEMerceditasGomezM.png' width={40}/>
            <h4>Merceditas Gomez</h4>
            <h6>Primaria / bachiller</h6>
          </a>
          <a  target='_blank' href='https://www.cesde.edu.co' className="cajaUni">
            <img src='./logo-Cesde-2023.svg' width={120} />
            <h4>Cesde</h4>
            <h6>Tecnica</h6>
          </a>
          <a  target='_blank' href='https://platzi.com/' className="cajaplz">
            <img src='./6m8_I1pN_400x400.jpg' width={40}/>
            <h4>Platzi</h4>
            <h6>Aprendizaje</h6>

          </a>
          <a  target='_blank' href='https://academy.sophossolutions.com/' className="cajaSp">
            <img src='./header-logo.png' width={100}/>
            <h4>SPAcademy</h4>
            <h6>Aprendizaje</h6>
          </a>

        </div>
        <h2 className="txtTrabajo">Trabajos</h2>
        <div className="Trabajos">
          <a  target='_blank' href='https://www.sophossolutions.com/es/' className="cajaTrabo">
            <img src='/sophos_GFT.png' width={110}/>
            <h4>Sophos</h4>
            <h6>Praticas</h6>
          </a>
          <a  target='_blank' href='https://www.bloomify.tech/' className="cajaTrabo3">
            <img src='/bloomify-logo.png' width={80}/>
            <h4>Bloomify</h4>
            <h6></h6>
          </a>
        </div>
        
     </div>
    </header>
  )
}

export default soy