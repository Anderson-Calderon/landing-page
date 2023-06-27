import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Inicio from './paginas/Inicio';
import ConfirmarAsistencia from './paginas/ConfirmarAsistencia';

function App() {
 


  return (
    <>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={ <Inicio /> }>

             

            </Route>


            <Route path="/confirmar/:id" element={ <ConfirmarAsistencia /> }>

              

            </Route>

          </Routes>


        </BrowserRouter>
      
   

    </>
  )
}

export default App
