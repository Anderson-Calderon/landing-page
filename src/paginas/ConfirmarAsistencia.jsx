
import axios from 'axios';

import {useParams , Link} from 'react-router-dom';
import {useEffect} from 'react';
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css"


const ConfirmarAsistencia = ()=>{
	

	const {id} = useParams();

	console.log(id);

	useEffect(()=>{

		const confirmarAsitencia = async ()=>{


				try{

					const {data} = await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/usuarios/confirmar/"+id);


				     Swal.fire({
				        title: "Asistencia confirmada ",
				        text: data.msg,
				        icon: 'success',
				        showCancelButton: false,
				        confirmButtonColor: '#4274CC',
				        confirmButtonText: 'OK'
				      }).then((result) => {
								  /* Read more about isConfirmed, isDenied below */
								  if (result.isConfirmed) {
								   	
								   	window.location.href=import.meta.env.VITE_FRONT_URL
								  } 
								})

				}catch(error){

					console.log(error);
					console.log(error.response.data.msg);


					 Swal.fire({
				        title: "Error  ",
				        text: error.response.data.msg,
				        icon: 'error',
				        showCancelButton: false,
				        confirmButtonColor: '#4274CC',
				        confirmButtonText: 'Salir'
				      }).then((result) => {
								 
								  if (result.isConfirmed) {
								   	
								   	window.location.href=import.meta.env.VITE_FRONT_URL

								  } 
								})

				}


		}

		confirmarAsitencia();


	},[]);

	return(

			<>


				<p></p>




			</>


			)

}

export default ConfirmarAsistencia;