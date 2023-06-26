import { useState ,useEffect } from 'react'




function App() {
  
  useEffect(()=>{

  const barraSuperior = document.querySelector(".barra-superior");



  window.addEventListener("scroll",function(){

    if(window.scrollY>0){

        barraSuperior.classList.add("blanco");


    }else{


         barraSuperior.classList.remove("blanco");

    }

  });


  },[]);


  return (
    <>


      <main>
        
        <header className="header ">

          <div className="barra-superior">
            
            <div  className="barra-superior contenedor flex justify-between items-center ">
              

              <div className="logo">
              

                <p> 

                    <span className="font-bold text-2xl">Anderson Calderón</span> <br/>
                    Experto en Desarrollo Web

                 </p>


              </div>


              <nav className="barra-navegacion flex gap-5">
                
                <a href="">INICIO</a>
                <a href="">FB</a>
                <a href="">TW</a>
                <a href="">YOU</a>


              </nav>



            </div>


          </div>


          <div className="contenido-header contenedor pl-20">
              
            <h1 className="text-5xl font-bold text-left">  

                    Seminario Web Gratis <br />
                    de Desarrollo Web

            </h1>

            <p className="text-left text-2xl mt-2">Descubre los Secretos del Desarrollo  Web</p>


            <a href="#formulario" className="boton font-medium text-lg mt-20">
                
                Reserva tu lugar

            </a>

          </div>



        </header>


        <section className="contenedor soy-anderson ">
          

          <div className="contenedor-imagen-anderson mt-20">
            
               <h2 className="text-5xl font-bold text-left">
                 
                 Hola  ,<br/>
                 Soy Anderson

                </h2>

          </div>

          <div className="contenedor-contenido-descripcion-anderson mt-20">
            
         


            <h3 className="font-bold text-xl text-left">
              
              Experto en desarrollo web <br/>

              con +3 años de experiencia.

            </h3>

            <p className="text-justify  mt-5 pr-32">
              
              Este es un buen espacio para extenderte sobre tu empresa y servicios. Puedes usar este espacio para incorporar más detalles sobre tu empresa. Escribe sobre tu personal y los servicios que ofreces. Cuenta cómo se te ocurrió la idea de tu negocio y lo que te diferencia de tus competidores. Haz que tu empresa se destaque y muestra a tus visitantes quién eres.

            </p>


          </div>

        </section>

        <section className="que-vas-aprender contenedor">
            
            <h2 className="text-4xl my-20 text-center font-bold">¿ Qué vas a aprender ?</h2>

            <div className="contenedor-cartas-aprender mb-20">

              <div className="carta-aprender">
                
                <p className="numero-aprender">
                  
                    01


                </p>


                <p className="texto-aprender">
                
                  Usar Facebook e  <br/> Insta para aumentar <br/>  tus conversiones      

                </p>

              </div>


              <div className="carta-aprender">
                
                <p className="numero-aprender">
                  
                    02


                </p>


                <p className="texto-aprender">
                
                  Mejorar la presencia  <br/> de tu marca usando  <br/>  analítica web    

                </p>

              </div>


              <div className="carta-aprender">
                
                <p className="numero-aprender">
                  
                    03


                </p>


                <p className="texto-aprender">
                
                  Diseñar material  <br/> de marketing para <br/>  tener más ventas      

                </p>

              </div>

            </div>

            <a href="#formulario" className="boton">
                
                Reserva tu lugar

            </a>

        </section>

        <section className="my-20 testimonios">


          
          <div className="contenedor ">


            
            <h2 className="text-center text-4xl font-bold">Testimonios</h2>

            <ul className=" testimoniales flex">
              
              <li >

                  <img src="public/imagenes/comillas-.png"  className="comillas"/>
                
                <p className="w-3/4 mx-auto testimonial text-5xl text-center my-20 ">
                  
                  Testimonio. Haz clic aquí para editar y agregar un texto que diga algo bueno sobre ti y tus servicios.

                </p>


                 <p className="text-center text-xl"><span className="font-bold"> Ronald Smith </span>, LIMA  </p>

              </li>


              <li >
                
                 <img src="public/imagenes/comillas-.png"  className="comillas"/>
                
                 <p className="w-3/4  testimonial text-5xl text-center my-20 mx-auto">
                    
                    Testimonio. Haz clic aquí para editar y agregar un texto que diga algo bueno sobre ti y tus servicios.

                  </p>


                 <p className="text-center text-xl"><span className="font-bold"> Anderson Calderón </span>, LIMA  </p>

              </li>

            </ul>

           

          </div>

        </section>


        <section className="formulario my-20" id="formulario">
          
          <h2 className="text-center my-20 text-4xl font-bold">Reserva tu lugar</h2>

          <div className="contenedor">

            <form  className="flex gap-5 justify-between">
              
              <div className="contenedor-input flex">
                
                 <input  className="w-50 p-2" type="text" name="nombre"  placeholder="Tu Nombre" autocomplete="off" required />

                 <input   className="w-50 p-2" type="email" name="email"  placeholder="Tu Correo" autocomplete="off" required />

              </div>

              <a href="#formulario" type="submit" className="boton-formulario">
                
                Reservar

              </a>


            </form>
          </div>

        </section>

      </main>



      <footer className="py-4 ">
        
        <div className="contenedor flex justify-between items-center">
          
           <p className="text-white text-center py-2">Av. de los Rosales 122 28021 Madrid - España</p>
           <p className="text-white text-center py-2">Tel: 914-123-456     |     info@misitio.com</p>


           <nav className="flex gap-4">
            
            <a href="" className="text-white">FA</a>
            <a href="" className="text-white">TW</a>
            <a href="" className="text-white">YOU</a>

           </nav>

        </div>

      </footer>

      
   

    </>
  )
}

export default App
