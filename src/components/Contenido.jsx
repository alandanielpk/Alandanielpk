import '../assets/css/contenido.css'
import { Link } from 'react-router-dom'

const Contenido = () => {
  return (
<div>
      <div>
      <div className="cajatexto">
        <h1>Alan Daniel Pk</h1>
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