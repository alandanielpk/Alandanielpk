import '../assets/css/contenido.css'
import { Link } from 'react-router-dom'

const Contenido = () => {
  return (
<div>
      <div>
      <div className="cajatexto">
        <div className='nombreV'>
          <h1>Alan Daniel Pk</h1>
          <div className='verificacion'>
          <svg aria-label="Verificado" className="x1lliihq x1n2onr6" fill="rgb(128,0,255)" height="20" role="img" viewBox="0 0 40 40" width="20">
            <title>Verificado</title>
            <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd">
            </path>
            </svg>
          </div>
        </div>
        
        <p> Soy Alan Daniel Londoño, un Desarrollado Software💻 y un creador de multimedia. Técnico en desarrollo web🎓 y estudio empírico de creador de multimedia. Con muchos ámbitos de crear un mundo con el arte y la tecnología mucho mejor. </p>
      </div>
      

      <h2 className='txtHabilidades'>Habilidades</h2>

  <div className="cajas">
    <Link to="/desarrollador">
      <div className="card">
            <img src='./desarrollo-web.png' alt="" width={200}/>
          <div className="card__content">
            <p className="card__title">Desarrollador web 💻</p>
            <p className="card__description">Soy desarrollador de software. Llevo 2 años de experiencia en la parte front-end & back-end.</p>
            <h6 className='textoMM'>(Entra a este link y conoce más de esta área.)</h6>
        </div>
      </div>
    </Link> 
    <Link to="/multimedia">
    <div className="card">
            <img src='./gestion-de-contenido.png' alt="" width={200}/>
          <div className="card__content">
            <p className="card__title">Multimedia ☃︎</p>
            <p className="card__description">Soy un Diseñador Multimedia con 3 años de experiencia en el área de fotografía, edición de video y contenido audiovisual.</p>
            <h6 className='textoMM'>(Entra a este link y conoce más de esta área.)</h6>
        </div>
      </div>
    </Link>
      </div>
  </div>
  
</div>
  )
}

export default Contenido