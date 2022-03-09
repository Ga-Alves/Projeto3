import api from '../../Service/api'


export default function Edit_User(body, id){
   api.put(`/usuarios/${id}`, body)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
   });
}
