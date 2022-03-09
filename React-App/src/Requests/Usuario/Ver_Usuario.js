import api from '../../Service/api'


async function Ver_Usuario(id){
  
    const User =  await api.get(`/usuarios/${id}`)
    return User.data;

}
export default Ver_Usuario;
