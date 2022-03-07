import api from '../../Service/api'


export default function Criar_Usuario(body, id){
   api.put(`/usuarios/${id}`, body)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
   });
}
