import './multimedia.css'
const multimedia = () => {
  return (
    <header className='Multimedia'>
      <h1>Creador Multimedia</h1>
      <h4>Acá en esta ventana verás, todo sobre mis conocimientos como Creador de Multimedia</h4>
      <div className='RedesDesa'>
        <a href="https://www.facebook.com/Alan.Daniel.Flow/" target='_blank'><i id='facebook1' className='bx bxl-facebook-circle'></i></a>
        <a href="https://www.instagram.com/el.alan.pk/" target='_blank'><i id='instagram1' className='bx bxl-instagram'></i></a>
        <a href="https://www.tiktok.com/@elalan.pk" target='_blank'><i id='tiktok1' className='bx bxl-tiktok'></i></a>
      </div>
      <div className='cajaMultimedia'>
          <h2>Fotografia & Videgrafia & Diseño Grafico</h2>
          <h3>Plataformas que uso y he usado.</h3>
          <h5>Phostoshop | illustrator | Lightroom | Filmora | Capcut</h5>
          <div className='galeria'>
            <img src='./11.jpeg' width={150}/>
            <img src='./12.jpeg' width={150}/>
            <img src='./13.jpg' width={150}/>
            <img src='./14.JPG' width={150}/>
            <img src='./15.JPG' width={150}/>
            <img src='./16.JPG' width={150}/>
            <img src='./5.jpeg' width={150}/>
            <img src='./6.jpeg' width={150}/>
            <img src='./7.jpg'width={150}/>
            <img src='./8.jpg' width={150}/>
            <img src='./9.jpeg' width={150}/>
            <img src='./DSC000.jpg' width={150}/>
            <img src='./DSC_0011-2.jpg' width={150}/>
            <img src='./DSC_0014.jpg' width={150}/>
            <img src='./DSC_0029 (1).jpg' width={150}/>
            <img src='./DSC_0029.jpg' width={150}/>
            <img src='./DSC_0035.jpg' width={150}/>
            <img src='./DSC_0041.jpg' width={150}/>
            <img src='./DSC_0089.jpg' width={150}/>
            <img src='./DSC_0298.jpg' width={150}/>
            <img src='./DSC_2.jpeg' width={150}/>
          </div>
          <div className='Video'>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/m3679oCE6vU?si=-0WggqTpdhePP-S4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          </div>
      </div>
      
    </header>
  )
}

export default multimedia