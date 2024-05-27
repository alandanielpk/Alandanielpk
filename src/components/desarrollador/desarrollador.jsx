import { Link } from 'react-router-dom'
import './desarrollador.css'

const desarrollador = () => {
  return (
    <div className='Desarrollador'>
      <h1>Desarrollador web</h1>
      <h4>Acá en esta ventana verás, todo sobre mis conocimientos como desarrollador y mis proyectos.</h4>
      <div className='RedesDesa'>
        <a  href="https://github.com/alandanielpk" target='_blank'><i id='github1' className='bx bxl-github'></i></a>
        <a  href="https://www.linkedin.com/in/alan-daniel-londo%C3%B1o-chavarr%C3%ADa-9188b92b9/" target='_blank'><i id='in1' className='bx bxl-linkedin' ></i></a>
      </div>
      <h2 className='titulodveloper2'>Mis conocimientos</h2>
      <div className='cajadesarrollo'>
            <h3>Front end & Back end </h3>
            <h5>Plan Comun</h5>
          <p>Plataformas que uso y he usado.</p>
          <h1 className='front'> HTML | CSS | JavaScript | Node JS | React.JS | Angular | Figma</h1>
          <h1 className='front'> Java | Spring Boot | Python | SQL</h1>
          <h1 className='front'>Git | GitHub | Docker </h1>
          <div className='logos'>
            <a target='_blank' href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics"><img src='./html.png' width={100} /></a>
            <a target='_blank' href="https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/What_is_CSS"><img src='./css.png' width={100} /></a>
            <a target='_blank' href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"><img src='./javascript_icon_130900.png' width={100}/></a>
            <a target='_blank' href="https://es.react.dev/"><img src='./react_original_logo_icon_146374.png' width={100} /></a>
            <a target='_blank' href="https://tailwindcss.com/"><img src="./tailwind-css.png"/></a>
            <a target='_blank' href="https://angular.io/"><img src="./angular.png" /></a>
            <a target='_blank' href="https://nodejs.org/en"><img src='./file_type_node_icon_130301.png' width={100}/></a>
            <a target='_blank' href="https://www.java.com/es/"><img src='./java.png' width={100} /></a>
            <a target='_blank' href="https://spring.io/projects/spring-boot"><img src='./springboot.png' width={100} /></a>
            <a target='_blank' href="https://www.python.org/"><img src='./python.png' width={100} /></a>
            <a target='_blank' href="https://www.djangoproject.com/"><img src='./django.png' width={100}/></a>
            <a target='_blank' href="https://azure.microsoft.com/es-mx/products/azure-sql/?ef_id=_k_2159255e28521b85977843673ccafb9c_k_&OCID=AIDcmm3804ythc_SEM__k_2159255e28521b85977843673ccafb9c_k_&msclkid=2159255e28521b85977843673ccafb9c"><img src='./SQL.png' width={100} /></a>
            <a target='_blank' href="https://git-scm.com/"><img src='./git.png' width={100}/></a>
            <a target='_blank' href="https://github.com/"><img src='./github.png' width={100} /></a>
            <a target='_blank' href="https://www.docker.com/"><img src='./docker.png'width={100}/></a>
            <a target='_blank' href="https://www.figma.com/"><img src='./figma.png' width={100} /></a>
          </div>
      </div>
            <h1>Trabajos</h1>
      <div className='caja_Creaciones'>
            <Link to="/Trickin"><img src="./tic-tac-toe.png" width={100}/></Link>
            <Link to="/Calculadora"><img src="./calculadora.png" width={100}/></Link>
      </div>

      
    </div>
  )
}

export default desarrollador