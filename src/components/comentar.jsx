
import '../assets/css/comentar.css'

const comentar = () => {


  return (
    <header>
        <div className="comments-container">
        <h2>Deja un comentario</h2>
        <form id='comment-form' action="https://formsubmit.co/alandaniellon01@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name='email' placeholder='Correo' required />
            <textarea name="comment" placeholder="Escribe tu comentario" required></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div id="comments-list"></div>
    </div>
    <div className="linea"></div>
    <div className='subtexto'>
        <h3>
            Por si tienes dudas, necesitas algo o ayuda, comunicate por este medio,
            Estare pediente de tu mensaje.
        </h3>
    </div>
    <div><a href="https://www.mediafire.com/file/qhlvl01o4unn599/Prototype_2.rar/file">pt2</a></div>
    </header>
    
    

  )
}

export default comentar