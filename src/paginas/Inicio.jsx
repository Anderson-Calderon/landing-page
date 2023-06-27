import { useState ,useEffect } from 'react'
import { FaFacebookF , FaTwitter ,FaYoutube } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css"

function Inicio() {
  

  const [nombre,setNombre]=useState("");
  const [correo,setCorreo]=useState("");

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


  const handleSubmit = async (e)=>{

    e.preventDefault();


    try{


      const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/usuarios",{nombre,correo});


           Swal.fire({
              title: "Cupo Reservado ",
              text: data.msg,
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#4274CC',
              confirmButtonText: 'OK'
            }).then((result) => {
                 
                  if (result.isConfirmed) {
                    
                      setNombre("");
                      setCorreo("");

                  } 
                })

    }catch(error){


      console.log("ERROR : "+error.response.data.msg);

  }







  }


  return (
    <>


      <main>



        {
          // HEADER 

        }
        
        <header className="header">

          {

              //BARRA DE COLOR BLANCA AL HACER SCROLL HACIA ABAJO 

          }

          <div className="barra-superior">
            

          {

              //BARRA CON UN ANCHO IGUAL A 1280px y CONTIENE AL LOGO Y LA BARRA DE NAVEGACIÓN DE LA PÁGINA

          }

            <div  className="barra-superior contenedor flex justify-between items-center ">
              



                {

                    //LOGO DE LA PÁGINA

                }

              <div className="logo">
              

               
                <p> 

                    <span className="font-bold text-2xl">Anderson Calderón</span> <br/>
                    Experto en Desarrollo Web

                 </p>


              </div>

              {

                //BARRA DE NAVEGACIÓN DE LA PÁGINA

              }

              <nav className="barra-navegacion  gap-5  hidden sm:flex ">
                
                <a href="" className="">INICIO</a>
                <a href=""> 

                  <FaFacebookF  style={{color: '' , fontSize: '25px'}}/>

                 </a>
                <a href="">
                  
                  <FaTwitter  style={{color: '' , fontSize: '25px'}} />


                </a>
                <a href="">
                  
                  <FaYoutube   style={{color: '' , fontSize: '25px'}} />


                </a>


              </nav>



            </div>


          </div>


          {


            //CONTENIDO DEL HEADER : TITULO , DESCRIPCION Y BOTON

          }

          <div className="contenido-header contenedor pl-0 sm:pl-5 md:pl-20          flex flex-col   ">
              
            <h1 className="   font-bold text-center md:text-left   text-4xl sm:text-5xl">  

                    Seminario Web Gratis <br />
                    de Desarrollo Web

            </h1>

            <p className="text-center md:text-left text-2xl mt-2">Descubre los Secretos del Desarrollo  Web</p>


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

          <div className="contenedor-contenido-descripcion-anderson  mt-8  md:mt-20">
            
         


            <h3 className="font-bold text-xl text-left">
              
              Experto en desarrollo web <br/>

              con +3 años de experiencia.

            </h3>

            <p className="text-justify  mt-5  px-4 md:px-0 md:pr-4 lg:pr-32 xl:pr-32   ">
              
             Soy un profesional apasionado por la creación de soluciones digitales y la construcción de sitios web funcionales y atractivos. Tengo una sólida formación en lenguajes de programación web, como HTML, CSS y JavaScript, así como experiencia en el uso de frameworks y tecnologías populares como React y Bootstrap.
             Mi enfoque principal es comprender las necesidades y objetivos del proyecto para diseñar y desarrollar soluciones a medida que cumplan con los requisitos específicos.

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
                
                  Usar HTML  <br/>  para realizar la <br/>  estructura de tu web      

                </p>

              </div>


              <div className="carta-aprender">
                
                <p className="numero-aprender">
                  
                    02


                </p>


                <p className="texto-aprender">
                
                  Mejorar la presencia  <br/> de tu web <br/>  con CSS   

                </p>

              </div>


              <div className="carta-aprender">
                
                <p className="numero-aprender">
                  
                    03


                </p>


                <p className="texto-aprender">
                
                  Añadir interactividad <br/> a tu web  <br/>  con JS   

                </p>

              </div>

            </div>

            <a href="#formulario" className="boton">
                
                Reserva tu lugar

            </a>

        </section>

        <section className="my-20 testimonios">


          
          <div >


            
            <h2 className="text-center text-4xl font-bold">Testimonios</h2>

            <ul className=" testimoniales flex ">
              
              <li >

                 <div className="contenedor">
                   

                   <img src="/imagenes/comillas.png"  className="comillas"/>
                
                  <p className="w-3/4 mx-auto testimonial text-5xl text-center my-20 ">
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.

                  </p>


                 <p className="text-center text-xl"><span className="font-bold"> Ronald Smith </span>, LIMA  </p>


                 </div>

              </li>


              <li >
                
                    <div className="contenedor">

                       <img src="/imagenes/comillas.png"  className="comillas"/>
                      
                       <p className="w-3/4  testimonial text-5xl text-center my-20 mx-auto">
                          
                          Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. 

                        </p>


                       <p className="text-center text-xl"><span className="font-bold"> Diego Lara </span>, LIMA  </p>

                    </div>

              </li>

            </ul>

           

          </div>

        </section>


        <section className="formulario my-20" id="formulario">
          
          <h2 className="text-center my-20 text-4xl font-bold">Reserva tu lugar</h2>

          <div className="contenedor">

            <form   

             onSubmit={handleSubmit}
             className="flex gap-5 justify-between">
              
              <div className="contenedor-input flex">
                
                 <input  

                 onChange={(e)=>{setNombre(e.target.value)}} 
                  className="w-50 p-2" type="text" name="nombre"  placeholder="Tu Nombre" autocomplete="off" required 

                  />

                 <input   


                  onChange={(e)=>{setCorreo(e.target.value)}} 
                 className="w-50 p-2" type="email" name="email"  placeholder="Tu Correo" autocomplete="off" required />

              </div>

              <button  type="submit" className="boton-formulario">
                
                Reservar

              </button>


            </form>
          </div>

        </section>

      </main>



      <footer className="py-4 ">
        
        <div className="contenedor flex justify-between items-center">
          
           <p className="text-white text-center py-2">Av. de los Rosales 122 28021 Madrid - España</p>
           <p className="text-white text-center py-2">Tel: 914-123-456     |     info@misitio.com</p>


           <nav className="flex gap-4">
            
            <a href="" className="text-white"><FaFacebookF  style={{color: '' , fontSize: '25px'}}/></a>
            <a href="" className="text-white"> <FaTwitter  style={{color: '' , fontSize: '25px'}} /></a>
            <a href="" className="text-white"><FaYoutube  style={{color: '' , fontSize: '25px'}} /></a>

           </nav>

        </div>

      </footer>

      
   

    </>
  )
}

export default Inicio;
