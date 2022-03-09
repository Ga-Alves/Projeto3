import api from '../../Service/api'

import history from '../../Service/history';


export default function Logar(body){

   api.post('/usuarios/login', body)
    .then((res) =>{
        console.log("Res: ", res);
        const usuario = JSON.stringify(res.data);
        console.log(usuario);
        localStorage.setItem("user", JSON.stringify(res.data));
<<<<<<< HEAD
        history.push("/dashboard/Home");
=======
        history.push("/dashboard/home");
>>>>>>> 202e50e7dc0cbf5be03ddf27b1875eb3226fc416
        document.location.reload(true);
    })
    .catch((err) =>{
        console.log("Err: ", err);
        console.log(body)
    })
}