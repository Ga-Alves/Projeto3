import api from '../../Service/api'
import Swal from 'sweetalert2';
import history from '../../Service/history';



export default function Criar_Usuario(body){
   
   api.post('/usuarios/', body)
   .then((res) =>{
      console.log(res);
      Swal.fire({
         icon: "success", 
         timer: "3500" ,
         showConfirmButton: false,
         text: 'Registro Feito'
       })

   })
   .catch((err) =>{
      console.log(err);
      console.log(body);
   });

}
